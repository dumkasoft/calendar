define(["react", "JSXTransformer"], function(React, JSXTransformer){
	var Textarea = React.createClass({
 		
		render: function() {
			return <div className=" form-group">
						<div className="col-xs-12 col-md-12 col-lg-12">
 							<textarea ref= "textarea" className="form-control floating-label" placeholder={this.props.textAreaPlaceholder} ></textarea>
				   		</div>
					</div>
		}
	});

	return Textarea
});