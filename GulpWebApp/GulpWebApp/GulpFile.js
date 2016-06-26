/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var concat = require("gulp-concat");
var yargs = require("yargs").argv;
var sass = require("gulp-sass");
var htmlReplace = require("gulp-html-replace");

gulp.task("default", function () {
    console.log("Hello... you hit the default task");
});

gulp.task("deploy", ["compile-sass"],
   function () {
       // get the deployment temp folder (passed in from pubxml file(s) process)
       var deployTempFolder = yargs.folder;

       console.log("**************************************");
       console.log("Using temp deploy folder: " + deployTempFolder);       

       gulp.src(deployTempFolder + "aaa.html")
          .pipe(htmlReplace({
              "css": "styles1.min.css"
          }))
          .pipe(gulp.dest(deployTempFolder));

   });

gulp.task("compile-sass", function () {
    console.log("Compiling SASS")
});
