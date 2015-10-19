
define(["backbone",
		"react",
		"jsx!../controllers/LogInController",
		"jsx!../controllers/RegistrationController"],
 function(
 	Backbone,
 	React,
 	LogInController,
 	RegistrationController
 	) {
 	
	var Router = Backbone.Router.extend({
		routes: {
			"index" : "index",
			"registration": "registration",

			index: function() {
				React.render(<LogInController/>, document.getElementById("calendar"));
			},
			registration: function() {
				React.render(<RegistrationController/>, document.getElementById("calendar"));
			}
		}
	});

	function setPage(component){
		React.render(<component/>, document.getElementById("calendar"));
	}

	return Router;

});