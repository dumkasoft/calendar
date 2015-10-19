define([
 "react",
 "JSXTransformer",
 "jsx!../ui-components/RegistrationForm",
 "jsx!../ui-components/base-components/Input",
 "jsx!../ui-components/base-components/ServiceComponent",
 "jsx!../ui-components/base-components/Table",
 "jsx!../ui-components/base-components/Textarea",
 "jsx!../ui-components/base-components/SelectBox" 
 ],
  function(
   React,
   JSXTransformer,
   RegistrationForm,
   Input,
   ServiceComponent,
   Table,
   Textarea,
   SelectBox
   ) {

   	var RegistrationController = React.createClass({
   		render: function() {
       


   			return <div className="center-block calendar-registrationForm-holder">
   						<RegistrationForm label="Registration">
                           <Input required="true" type="email" pattern="email" placeholder="Email" />
                           <Input required="true" type="password" pattern="password" placeholder="Password"/>
                           <Input ref="repeatPassword" required="true" type="password" pattern="password" placeholder="Repeat password"/>
                           <ServiceComponent ref="serviceComponent" textareaPlaceholder="Description"> 
                              <Input type="text" placeholder="Service" required="true" />
                              <SelectBox initialValue=" " required="true" selectboxOptions={[{item:1},{item:2},{item:3},{item:4},{item:5}]} comboboxPlaceholder="Hours" />
                              <br> </br>
                              <Textarea textAreaPlaceholder={"Description"} />
                           </ServiceComponent>
                           <Table ref="table" headers={["Service name", "Length"]} />
                     </RegistrationForm>
   				   </div>
   		}
   	});

   	return RegistrationController;

});
