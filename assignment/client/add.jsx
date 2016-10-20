var React=require("react");
var Flex=require("../node_modules/flexboxgrid/css/flexboxgrid.css");
import RaisedButton from 'material-ui/RaisedButton';


const style = {
  margin: 12,
  marginLeft:"10px"
  
};

var Add=React.createClass({
	
	add(){
			
			this.props.opr.call(this,"+");
			
		},
	
	render(){
		
		return (
			 <RaisedButton  onClick={this.add} className="col-lg-1 col-sm-1 col-xs-1"  style={style} label="+" />

		)
	}
});

module.exports=Add;