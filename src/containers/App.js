import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
	constructor(props) {
		super(props);
		console.log('[App.js] constructor');
	}
	state = {
		persons: [
			{ id: 'a', name: 'max', age: 28 },
			{ id: 'b', name: 'manu', age: 29 },
			{ id: 'c', name: 'stephanie', age: 26 }
		],
		otherState: 'some other value',
		showPersons: false
	};

	static getDerivedStateFromProps(props,state) {
		console.log('[App.js] getDerivedStateFromProps',props);
		return state;
	};

	shouldComponentUpdate(nextProps,nextState) {
		console.log('[App.js] shouldComponentUpdate');
		return true;
	};

	componentDidUpdate() {
		console.log('[App.js] componentDidUpdate');
	};

	componentDidMount() {
		console.log('[App.js] componentDidMount');
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});
		const person = {
			...this.state.persons[personIndex]
		};
		person.name = event.target.value;
		const persons = [ ...this.state.persons ];
		persons[personIndex] = person;
		this.setState({
			persons: persons
		});
	};

	deletePersonHandler = (personIndex) => {
		const persons = [ ...this.state.persons ];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		console.log('[App.js] rendering...');
		let persons = null;
		if (this.state.showPersons) {
			persons = (
				<Persons
					persons={this.state.persons}
					clicked={this.deletePersonHandler}
					changed={this.nameChangedHandler}
				/>
			);
		}
		return (
			<div className={classes.App}>
				<Cockpit
					title={this.props.appTitle}
					persons={this.state.persons}
					clicked={this.togglePersonHandler}
					showPersons={this.state.showPersons}
				/>
				{persons}
			</div>
		);
	}
}

export default App;
