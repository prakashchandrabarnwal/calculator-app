var React=require("react"),
	mui = require('material-ui'),
	TextField = mui.TextField,
	Flex=require("../node_modules/flexboxgrid/css/flexboxgrid.css");

var Input=React.createClass({
	
		getInitialState(){
			return ({input1:0});
		},
		
		handleInput1(evt){
			this.setState({input1:evt.target.value});
			this.props.val.call(this,evt.target.value);
			
		},
		
	render(){
		return (
		<div>
			<TextField  type="text" value={this.state.input1} onChange={this.handleInput1} id="input1" style={{marginLeft:"450px"}}/>
		</div>
		);
	}
});

module.exports=Input;