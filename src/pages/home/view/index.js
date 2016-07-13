import  React  from 'react';

class HelloReact extends React.Component {
	// ES 7
	/*static propTypes = {
		title: React.PropTypes.string.isRequired,
		price: React.PropTypes.number.isRequired,
		initialQty: React.PropTypes.number
	};
	static defaultProps = {
		title: 'Undefined Product',
		price: 100,
		initialQty: 0
	};*/

	constructor(props){
		super(props);
	}
	clickTest = () =>{
		console.log(this);
	}
	render () {
		return (
				<div>
					<button onClick={this.clickTest}>Hello React</button>
				</div>
		);
	}
}

export default HelloReact;


