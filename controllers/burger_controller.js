

var db = require("../models");
//get request method, talks to database and renders result to html

module.exports = function(router){



	router.get("/", function(req, res){

		res.redirect("/burger");
	});

	router.get("/burger", function(req, res){

		db.burger.findAll({}).then(function(result){
			
				var hbsObj = {

					burgers: result
				}

				res.render("index", hbsObj);
		});


	});
	//post request method to handle user input update database and redirect to load updated info
	router.post("/api/burger", function(req, res){
		var input = req.body.burger_name.replace(/[\W_]+/g, "");
		console.log(input);
		
		db.burger.create({

			burger_name: input

		}).then(function(result){

			
			res.redirect('/burger');

		});


	});
	//put request method to update burger status in database
	router.put("/api/burger/:id", function(req, res){

		db.burger.update(req.body,{


			where:{

				id: req.params.id

			}

		}).then(function(result){

			
			res.json(result);

		});


	});
}