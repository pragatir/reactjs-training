'use strict';
import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';

class Quiz extends React.Component {
	render () {
		return <div>test {this.props.data}</div>;
	}
}

class Hello extends React.Component {
	render () {
		return (
			<div>
				Hello at {this.props.now}  
			</div>
		);
	}
}

render(<Hello now={new Date().toString()} b="7" />, document.getElementById('app'));

/*class App extends React.Component {
  render () {
    return (<div>
    		<p> Hello Pragati! You gotta learn React!!</p>
    		<AwesomeComponent />
    	</div>);
  }
}

render(<App/>, document.getElementById('app'));*/