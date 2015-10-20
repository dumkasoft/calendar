define([
	"react",
	"JSXTransformer",
	"jsx!../ui-components/AdminPageController",
	"jsx!../ui-components/base-components/Table"
	],
	 function(
	 	React,
	 	JSXTransformer,
	 	AdminPageController,
	 	Table
	 ){
		var AdminPage = React.createClass({
			componentWillMount: function() {
				var lastVisitedPage = localStorage.getItem("lastVisitedPage"); 
				
				if(lastVisitedPage) {
					this.content = lastVisitedPage.page;
					this.label = lastVisitedPage.label
				} else {
					this.content = <Table  headers={["Name", "Surname", "Number", "Last Visit Date", "Last Service Provided"]} />;
					this.label = "Clients"
				}
			},
			render: function() {
				return <div>
						<AdminPageController label={this.label}>
							{this.content}
						</AdminPageController>
					   </div>
			}
		});

		return AdminPage;

	 });