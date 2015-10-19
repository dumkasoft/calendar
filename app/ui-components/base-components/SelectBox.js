define(["react", "JSXTransformer", "underscore"], function(React, JSXTransformer, _ ) {
	
	var SelectBox = React.createClass({
  		getInitialState: function() {
  			return {
  				valid: true,
  				value: "",
  				identifier:undefined
  			}
  		},

		componentWillMount: function() {
			this.options = [];

			if(this.props.identifier) {
				this.setState({identifier: this.props.identifier});
			}
			
			if(this.props.required) {
				this.setState({valid: false});
			}

			if(this.props.selectboxOptions) {
				this.options = this.props.selectboxOptions.map(function(option) {
					return <option> {option.item}</option>
				})
			}
			if(this.props.initialValue) {
				this.options.push(<option disabled selected> {this.props.initialValue} </option>)
			}
		},

		handleChange: function(e) {
			var value = e.target.value,
				newState = {value: value};

			if(this.props.required) {
				newState.valid = value.length > 0;
			}

			this.setState(newState, function() {
				if(this.props.onChange) {
					this.props.onChange(_.extend({}, this.state));
				}
			}.bind(this));
		},

		getValue: function() {
			return this.refs.selectBox.getDOMNode().value;
		},

		render: function() {
			return <div className="form-group">
						<div className="col-xs-12 col-md-12 col-lg-12">
							<select ref="selectBox" onChange={this.handleChange} className="form-control floating-label" placeholder={this.props.comboboxPlaceholder}>
								{this.options}
		                	</select>
		                </div>	
				   </div>
		}
	});

	return SelectBox;
});