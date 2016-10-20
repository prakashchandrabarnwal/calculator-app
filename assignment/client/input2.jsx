var React=require("react"),
 mui = require('material-ui'),
 TextField = mui.TextField;
 
var Input=React.createClass({
	
		getInitialState(){
			return ({ input2:0});
		},
	
		handleInput2(evt){
			this.setState({input2:evt.target.value});
			this.props.val.call(this,evt.target.value)
		},
		
	
	render(){
		return (
		<div>
			<TextField  type="text" value={this.state.input2} onChange={this.handleInput2} name="input2" style={{marginLeft:20}}/>
		</div>
		);
	}
});

module.exports=Input;