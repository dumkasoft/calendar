define(["react", "JSXTransformer"], function(React, JSXTransformer) {
	var Table = React.createClass({
		getInitialState: function() {
			return {
				columns:[]
			}
		},

		componentWillMount: function() {
			this.headers = [];
			this.columns = [];

			if(this.props.identifier) {
				this.setState({identifier: this.props.identifier});
			}
			
			this.setHeaders();
			this.setColumns();
		},

		setHeaders: function() {
			if(this.props.headers) {
				this.headers = this.props.headers.map(function(header){
					return <th>{header}</th>
				});
			}
		},

		setColumns:function() {
			if(this.props.columns) {
				this.columns = this.props.columns.map(function(column) {
					var cells = Object.keys(column).map(function(key) {
						return <td>{column[key]}</td>
					});
					return <tr className={column.className || ""}>{cells}</tr>
				});
			}
		},

		addRow: function(row) {
			var cells = Object.keys(row).map(function(key) {
				return <td>{row[key]}</td>
			});
			this.columns.push(<tr  className="">{cells}</tr>);
			this.setState({columns: this.columns});

		},
		render: function() {
			this.setColumns();
			return <div>
						<table className="table table-striped table-hover">
						    <thead>
						        <tr>
						        {this.headers}
						        </tr>
						    </thead>
						    <tbody>
						        {this.columns}
						    </tbody>
						</table>
				  </div>
		}
	});

	return Table;
});