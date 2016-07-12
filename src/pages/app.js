var React = require('react');
var ReactDOM = require('react-dom');
var HelloReact = require('./index');

function init() {

	ReactDOM.render(<HelloReact />, document.querySelector('#container'));

}

init();