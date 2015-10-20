define(["react", "JSXTransformer","jsx!./base-components/Input" ], function(React, JSXTransformer, Input){
	var LogInFormController = React.createClass({
		
		getInitialState: function() {
			return {
				inputsValidity: []
			}
		},

		componentWillMount: function() {
			var newProps,
				input;

			this.inputsValidity = [];
			this.inputs = this.props.children || [];

			for(var i = 0; i < this.inputs.length; i += 1) {
				input = this.inputs[i];

				newProps = input.props;
				newProps.onChange = this.handleChange;
				newProps.valid = false;

				this.inputs[i] = React.cloneElement(input, newProps);

				this.inputsValidity.push(false);
			}		 
			
		},

		componentDidMount: function() {
			this.setState({inputsValidity: this.inputsValidity});
		},

		handleChange: function(childStateCopy) {
			var i = childStateCopy.identifier,
				valid = childStateCopy.valid;
				
			this.inputsValidity[i] = valid;
			this.setState({inputsValidity: this.inputsValidity});
		},

		validateButton: function() {
			var result = true;
			if(this.state.inputsValidity.indexOf(false) === -1) {
				result = false;
			}
			return result;
		},

		handleSubmit: function() {
		},

		render: function() {
			return	<div className="well"> 
						<form className="form-group form-horizontal">
								<fieldset>
									<legend>{this.props.label}</legend>
										{this.inputs}
        							<div className="form-group">
        							    <div className="col-lg-10 col-lg-offset-4">
        							        <button type="button" className="btn btn-black" disabled={this.validateButton()} onChange={this.handleSubmit}>Login</button>
        							    </div>
        							</div>
								</fieldset>				   
						</form>
					</div>
		}
	});

	return LogInFormController;

});