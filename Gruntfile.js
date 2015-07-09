module.exports=function (grunt) {
	grunt.registerTask("speak",function () {
		console.log("I am speaking");
		
	});
	
	grunt.registerTask("yell",function () {
		console.log("I am yelling");
		
	});
	grunt.registerTask("log",function () {
		grunt.log.write("grunt logging");
	});	
	grunt.initConfig({
		pkg:grunt.file.readJSON("package.json"),
		concat:{
			js:{
			src:['js/1.js','js/2.js'],
			dest:'build/js/scripts.js'		
			}, css:{
			src:['css/main.css','css/theme.css'],
			dest:'build/css/styles.css'		
			}
		},
		watch:{
			js:{
				files:"js/**/*.js",
				tasks:"concat:js"
			},
			css:
			{
			files:"css/**/*.css",
			tasks:"concat:css"	
			}
			
		},
		cssmin:{
			combine:{
				files:{
					"build/css/styles.min.css":["css/main.css","css/theme.css"]
				}
			}
		},
		uglify:{
			dist:{
				files:{
					"build/js/scripts.min.js":["js/1.js","js/2.js","js/testfile.js"]
				}
			}
		}
		
	});
	grunt.registerTask("default",["concat","cssmin","uglify","watch"]);
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	
};