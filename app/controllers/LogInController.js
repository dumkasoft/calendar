define(["react", 
		"JSXTransformer",
		"jsx!../ui-components/LogInForm",
		"jsx!../ui-components/base-components/Input"],
		 function(React, JSXTransformer, LogInForm, Input){


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

	LogInController = React.createClass({

		render: function() {
			return <div className="center-block calendar-logInController-holder">
						<LogInForm label="Login">
						{inputs.map(function(input, index){
							return <Input
									required={input.required}
									type={input.type}
									pattern={input.pattern}
									placeholder={input.placeholder}
									identifier={index} />
						})}
						</LogInForm>
					</div>
		}
	})

	return LogInController;

});