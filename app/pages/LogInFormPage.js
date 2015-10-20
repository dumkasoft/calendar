define(["react", 
		"JSXTransformer",
		"jsx!../ui-components/LogInFormController",
		"jsx!../ui-components/base-components/Input"],
		 function(React, JSXTransformer, LogInFormController, Input){


	var
	inputs = [{
		required: true,
		type: "email",
		pattern:"email",
		placeholder:"email"
	},{
		required: true,
		type:"password",
		pattern:"password",
		placeholder: "password"
	}],

	LogInFormPage = React.createClass({

		render: function() {
			return <div className="center-block calendar-logInController-holder">
						<LogInFormController label="Login">
						{inputs.map(function(input, index){
							return <Input
									required={input.required}
									type={input.type}
									pattern={input.pattern}
									placeholder={input.placeholder}
									identifier={index} />
						})}
						</LogInFormController>
					</div>
		}
	})

	return LogInFormPage;

});