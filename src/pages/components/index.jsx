var React = require('react');

var HelloReact = React.createClass({
	getInitialState: function () {
		return {
			count: 1
		}
	},
	handleClick: function () {
		this.setState({
			count: 123
		});
	},
	render: function () {
		return (
			<div>
				<button onClick={this.handleClick}> hello React {this.state.count}</button>
			</div>
		);
	}
});


module.exports = HelloReact;

