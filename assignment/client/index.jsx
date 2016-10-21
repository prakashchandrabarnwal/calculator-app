var React=require("react");
var ReactDOM=require("react-dom");
var Flex=require("../node_modules/flexboxgrid/css/flexboxgrid.css");
var Input1=require("./input1.jsx");
var Input2=require("./input2.jsx");
var Add=require("./add.jsx");
var Sub=require("./sub.jsx");
var Mult=require("./mult.jsx");
var Div=require("./div.jsx");
var Result=require("./result.jsx");

import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

injectTapEventPlugin();


var Calculator=React.createClass({
	
	getInitialState(){
		return ({selectedOperator:"",result:"",val1:0,val2:0});
	},
	
	operator(para){
		this.setState({selectedOperator:para});
	},
	
	getVal1(param){
		this.setState({val1:param});
	},
	
	getVal2(param){
		this.setState({val2:param});
	},
	
	getResult(){
		try {
			if(!this.state.selectedOperator){
				throw new Error("Please Select Operator");
			}
			var input1 =(+this.state.val1);
			var input2= (+this.state.val2);
			
			if(Object.is(input1,NaN)){
				throw new Error("Invalid input 1");
			}
			if(Object.is(input2,NaN)){
				throw new Error("Invalid input 2");
			}
			if(this.state.selectedOperator=="+"){
				this.setState({result:input1+input2});
				}
				if(this.state.selectedOperator=="-"){
					this.setState({result:input1-input2});
				}
				if(this.state.selectedOperator=="/"){
					if(Object.is(input1/input2,NaN))
						throw new Error("Invalid inputs");
					this.setState({result:input1/input2});
				}
				if(this.state.selectedOperator=="*"){
					this.setState({result:input1*input2});
				}
			
			} catch(e) {
				this.setState({result:e.message});
			}	
	},
	
	render(){
		return (
		<MuiThemeProvider >
		<div>
		<AppBar title="Calculator" iconElementLeft={<h1/>}/>
		<Paper style={{marginTop:30}}>
		<div className="container-fluid">
			<h1 className="col-lg-offset-5 col-xs-offset-4 col-md-offset-4 col-sm-offset-4">Calculator App</h1>
			<div className="row">
				<Input1 val={this.getVal1}/>
				<span style={{ paddingTop: "16px",paddingLeft:"10px"}}>{this.state.selectedOperator}</span>
				<Input2 val={this.getVal2} />
				<Result val={this.getResult} />
				<span style={{ paddingTop: "17px"}}>{this.state.result}</span>
			</div>
			
			<div className="row" style={{ marginTop: "40px"}}>
			<span style={{ paddingTop: "20px"}} className="col-lg-offset-3 col-md-offset-3 col-sm-offset-2 col-xs-offset-2" >Choose operation</span>
				<Add opr={this.operator} />
				<Sub opr={this.operator} />
				<Mult opr={this.operator}/>
				<Div opr={this.operator} />
			</div>
		</div>
		</Paper>
		</div>
		</MuiThemeProvider>
		)
	}
});


ReactDOM.render(<Calculator/>,document.getElementById("container"));