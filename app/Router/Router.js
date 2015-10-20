
define(["backbone",
		"react",
		"jsx!../pages/LogInFormPage",
		"jsx!../pages/RegistrationFormPage",
		"jsx!../pages/AdminPage"
		],
 function(
 	Backbone,
 	React,
 	LogInFormPage,
 	RegistrationFormPage,
 	AdminPage
 	) {
 	var appHolder = document.getElementById("calendar");

	var Router = Backbone.Router.extend({
		routes: {
			"index"       : "index",
			"registration": "registration",
			"adminPage"   : "adminPage",

			index: function() {
				React.render(<LogInFormPage/>, appHolder);
			},
			registration: function() {
				React.render(<RegistrationFormPage/>, appHolder);
			},
			adminPage: function() {
				React.render(<AdminPage/>, appHolder);
			}
		}
	});

	return Router;

});