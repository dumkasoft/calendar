define(["backbone"],function(Backbone) {
	var AdminModel =  Backbone.Model.extend({
		initialize: function() {
			console.log("Admin Model");
		},
		defaults: {

		}
	});

	return AdminModel;
})