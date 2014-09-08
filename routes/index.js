var express = require('express');
var fs = require("fs");
var path = require("path");
var router = express.Router();

var walk = function(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        ffile = dir + file;
        var stat = fs.statSync(ffile);
        if (stat && stat.isDirectory()) results = results.concat(walk(ffile));
        else results.push(file)
    });
    return results
};


router.get('/', function(req, res) {
  res.render('index', { title: 'Home'});
});

router.get('/characters', function(req, res) {
    var images = [];
    var p = "public/images/";
    images = walk(p);
//    fs.readdir(p, function (err, files) {
//        if (err) {
//            throw err;
//        }
//        files.map(function (file) {
//            return path.join(p, file);
//        }).filter(function (file) {
//            return fs.statSync(file).isFile();
//        }).forEach(function (file) {
//            images.push(file);
//            console.log("%s (%s)", file, path.extname(file));
//        });
//    });

    console.log("images:", images);
    res.render('characters', { title: 'Characters', images: images});
});

router.get('/drawings', function(req, res) {
    res.render('drawings', { title: 'Drawings' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});

router.get('/about', function(req, res) {
    res.render('about', { title: 'About' });
});

module.exports = router;
