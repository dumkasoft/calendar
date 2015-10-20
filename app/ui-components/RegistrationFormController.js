define([
	"react",
	"JSXTransformer",
	"jsx!./base-components/Input",
	"jsx!./base-components/ServiceComponent",
	"jsx!./base-components/Table"
	], function(
		React,
		JSXTransformer,
		Input,
		ServiceComponent,
		Table
		){

	var RegistrationFormController = React.createClass({
  		
  		childContextTypes: {
  		  selectboxOptions   : React.PropTypes.array,
  		  comboboxPlaceholder: React.PropTypes.string,
  		  textAreaPlaceholder: React.PropTypes.string
  		},

		getInitialState: function() {
			return {
				valid:false,
				columns:[]
			}
		},

		componentWillMount: function() {
			var newProps;

			this.table;
			this.inputs = [];
			this.serviceComponent = [];
			this.valid = {};

			React.Children.map(this.props.children, function(child, i) {
				newProps = child.props;
				newProps.onChange = this.validateForm;

				switch (child.type) {
					case Input.type:
						newProps.identifier = "input" + i;
						child = React.cloneElement(child, newProps);
						this.valid["input" + i] = false;
						this.inputs.push(child);
						break;
					case ServiceComponent.type:
						newProps.identifier = "serviceComponent";
						newProps.onClick = this.addRow;
						newProps.onButtonClick = this.addService;

						child = React.cloneElement(child, newProps);
						
						this.valid.serviceComponent = false;
						this.serviceComponent.push(child);
						break;
					case Table.type:
						newProps.identifier = "table";
						newProps.columns = this.state.columns;
						
						child = React.cloneElement(child, newProps);
						// this.valid.table = false;
						this.table = child;
					default:
						new Error("such component instance does not exist in RegistrationFormController");
				}
				return child
			}.bind(this));
		},

		validateForm: function(childStateCopy) {
			var identifier = childStateCopy.identifier,
				valid = childStateCopy.valid, 
				keys, key, result;

			this.valid[identifier] = valid;
			keys = Object.keys(this.valid);

			if(identifier === "serviceComponent") {
				this.tableRow = childStateCopy.data;
			}

			for(var i = 0; i < keys.length; i += 1) {
				key = keys[i];
				if(!this.valid[key]) {
					this.setState({valid: false});
					return;
				}
			}


		},

		addService: function() {
			var columns = this.state.columns,
				tableProps = this.table.props;
			if(this.tableRow) {
				columns.push(this.tableRow);
				tableProps.columns = columns;
				this.table = React.cloneElement(this.table, tableProps);
				this.forceUpdate();
			}
		},

		render: function() {
			return <div>
			 			<div className="well col-lg-12">
							<h3>{this.props.label}</h3>
							<div> 
								<form className="form-group form-horizontal">
										<fieldset>
											<legend>{this.props.userLabel}</legend>
												{this.inputs}
        									<div className="form-group"></div>
										</fieldset>				   
								</form>
							</div>
							<div>
								<div className="row">
									<div className="col-xs-12 col-md-12 col-lg-6">
										<form className="form-group form-horizontal">
											{this.serviceComponent}
										</form>
									</div>
									<div className="col-xs-12 col-md-12 col-lg-6">
										{this.table}
									</div>
								</div>
							</div>
        					<div className="form-group">
        					    <div>
        					        <button type="button" className="btn btn-black pull-right" disabled={!this.state.valid}>Register</button>
        					    </div>
        					</div>
						</div>
					</div>
		}
	});

	return RegistrationFormController;
});