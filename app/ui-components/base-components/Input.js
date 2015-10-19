define(["react", "JSXTransformer","underscore", "app/mixins/dataValidation"], function(React, JSXTransformer, _, dataValidation) {
	var Input = React.createClass({

		getInitialState: function() {
			return {
				valid: true,
				value: "",
				identifier:undefined
			}
		},

		componentWillMount: function() {
			this.setState({identifier: this.props.identifier});
			if(this.props.pattern && this.props.required) {
				this.setState({valid: false});
			}
		},

		handleChange: function(e) {
			var value = e.target.value,
				newState = {value: value};
				
			if(this.props.pattern) {
				newState.valid = dataValidation[this.props.pattern].test(value);
			} else if (this.props.required) {
				newState.valid = value.length > 0;
			}

			this.setState(newState, function() {
				if(this.props.onChange) {
					this.props.onChange(_.extend({}, this.state));
				}	
			}.bind(this));		
		},

		render: function() {
			return  <div className="form-group">
						<div className="col-xs-12 col-md-12 col-lg-12">
							<input type={this.props.type} className="form-control floating-label" placeholder={this.props.placeholder} onChange={this.handleChange}/>
						</div>
					</div>
		}
	});

	return Input;

});