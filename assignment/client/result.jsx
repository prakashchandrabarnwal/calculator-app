var React=require("react");
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

var Result=React.createClass({
	doComputation(){
		this.props.val();
	},
	render(){
	return (
		<RaisedButton onClick={this.doComputation} label="=" style={style}/>
	)
	}
	
});

module.exports=Result;