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
		
			<TextField  type="text" value={this.state.input2} onChange={this.handleInput2} name="input2" className="col-lg-3 col-xs-3 col-sm-3 col-xs-3"/>
		
		);
	}
});

module.exports=Input;