define([
	"react",
	"JSXTransformer",
	"jquery",
    "./base-components/Table"
	],
	 function(
	 	React,
	 	JSXTransformer,
	 	$,
        Table
	 ){
		var AdminPageController = React.createClass({
			componentDidMount: function() {
				$("#menu-toggle").click(function(e) {
       				e.preventDefault();
        			$("#wrapper").toggleClass("toggled");
    			});
			},
			render: function() {
				return <div>
    						<div id="wrapper">
    						    <div id="sidebar-wrapper">
    						        <ul className="sidebar-nav">
    						            <li className="sidebar-brand">
    						                <a href="#">
    						                    {this.props.label}
    						                </a>
    						            </li>
    						            <li>
    						                <a href="#">Dashboard</a>
    						            </li>
    						            <li>
    						                <a href="#">Shortcuts</a>
    						            </li>
    						            <li>
    						                <a href="#">Overview</a>
    						            </li>
    						            <li>
    						                <a href="#">Events</a>
    						            </li>
    						            <li>
    						                <a href="#">About</a>
    						            </li>
    						            <li>
    						                <a href="#">Services</a>
    						            </li>
    						            <li>
    						                <a href="#">Contact</a>
    						            </li>
    						        </ul>
    						    </div>
    						    <div id="page-content-wrapper">
    						        <div className="container-fluid">
    						            <div className="row">
    						                <div className="col-lg-12">
    						                    {this.props.children}
    						                </div>
    						            </div>
    						        </div>
    						    </div>						
    						</div>
					   </div>
			}
		});

		return AdminPageController;

	 });

/*<h1>Simple Sidebar</h1>
<p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
<p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
<a href="#menu-toggle" className="btn btn-default" id="menu-toggle">Toggle Menu</a>*/