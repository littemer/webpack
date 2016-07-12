var React = require('react');
var ReactDOM = require('react-dom');
var HelloReact = require('comp2/index');

function init() {

	ReactDOM.render(<HelloReact />, document.querySelector('#container'));

}

init();

// es 2016 语法