var React=require("react");
import RaisedButton from 'material-ui/RaisedButton';
var Flex=require("../node_modules/flexboxgrid/css/flexboxgrid.css");

const style = {
  margin: 12,
};

var Sub=React.createClass({
		sub(){
			this.props.opr.call(this,"-");
		},
	render(){
		return (
			 <RaisedButton  onClick={this.sub} className="col-lg-1 col-sm-1 col-xs-1"  style={style} label="-" />
		)
	}
});

module.exports=Sub;