define([
	"react",
	"JSXTransformer",
	"jsx!./Input",
	"jsx!./SelectBox",
	"jsx!./Textarea"
	],
	 function(
	 	React,
	 	JSXTransformer,
	 	Input,
	 	SelectBox,
	 	Textarea
	 ) {
	
	var ServiceComponent = React.createClass({
		getInitialState: function() {
			return {
				data:{},
				valid: false
			}
		},

		componentWillMount: function() {
			var newProps;
			this.valid = {};
			this.data = {};
			this.children = [];

			if(this.props.identifier) {
				this.setState({identifier : this.props.identifier});
			}

			React.Children.forEach(this.props.children, function(child, index) {
				newProps = child.props;
				newProps.onChange = this.handleChange;
				switch(child.type) {
					case Input.type: 
						newProps.identifier = "name";
						this.input = React.cloneElement(child, newProps);
						this.valid.name = false;
						break;
					case SelectBox.type:
						newProps.identifier = "length";
						this.selectbox = React.cloneElement(child, newProps);
						this.valid.length = false
						break;
					case Textarea.type:
						newProps.identifier = "description";
						this.textarea = React.cloneElement(child, newProps);
						this.valid.description = true
						break;
					default:
						new Error("such component does not exist");
				}
				this.children.push(child);
			}.bind(this));
		},

		handleChange: function(childStateCopy) {
			var key = childStateCopy.identifier,
				valid = childStateCopy.valid,
				keys = Object.keys(this.valid),
				result = true;
			
			this.data[key] = childStateCopy.value;
			this.valid[key] = valid;

			for(var i = 0; i < keys.length; i += 1) {
				key = keys[i];
				if(!this.valid[key]) {
					result = false;
					break;
				}
			}


			this.setState({valid: result, data:this.data}, function(){
				if(this.props.onChange) {
					this.props.onChange(_.extend({}, this.state));
				}
			}.bind(this));

		},

		validateButton: function() {
			var result = true,
				keys = Object.keys(this.valid);

			for(var i = 0; i < keys.length; i += 1) {
				if(!this.valid[keys[i]]) {
					result = false;
				}
			}
			return result;
		},

		handleClick: function() {
			if(this.props.onButtonClick) {
				this.props.onButtonClick();
			}
		},

		render: function() {
			return <div>
						{this.input}
						{this.selectbox}
						{this.textarea}
						<button onClick={this.handleClick} className="btn btn-flat btn-link btn-xs" disabled={!this.validateButton()}><i className="mdi-action-done"></i>Add Service</button>
				   </div>
		}
	});

	return ServiceComponent;
});