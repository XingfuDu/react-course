import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';


const StyledButton=styled.button`
	background-color: ${props=>props.alt?'red':'green'};
	color: white;
	font: inherit;
	border: 1px solid blue;
	padding: 8px;
	cursor: pointer;

	&:hover  {
		background-color: ${props=>props.alt?'salmon':'lightgreen'};
		color: black;
	}
`;


class App extends Component {
	state = {
	  persons: [
		{ id: 'a', name: 'max', age: 28 },
		{ id: 'b', name: 'manu', age: 29 },
		{ id: 'c', name: 'stephanie', age: 26 }
	  ],
	  otherState: 'some other value',
	  showPersons: false
	};

	nameChangedHandler = (event,id) => {
		const personIndex=this.state.persons.findIndex(p=>{
			return p.id === id;
		});
		const person={
			...this.state.persons[personIndex]
		}
		person.name=event.target.value;
		const persons=[...this.state.persons];
		persons[personIndex]=person;
		this.setState({
			persons: persons
		});
	};

	deletePersonHandler= (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex,1);
		this.setState({persons:persons});
	}

	togglePersonHandler = () => {
		const doesShow=this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	render() {
		// const style={
		// 	backgroundColor: 'green',
		// 	color: 'white',
		// 	font: 'inherit',
		// 	border: '1px solid blue',
		// 	padding: '8px',
		// 	cursor: 'pointer',
		// 	':hover':  {
		// 		backgroundColor: 'lightgreen',
		// 		color: 'black'
		// 	}
		// }
		let persons=null;
		if (this.state.showPersons) {
			persons=(
				<div>
					{ this.state.persons.map((person,index)=>{
							return <Person click={this.deletePersonHandler} name={person.name} 
							age={person.age}
							key={person.id}
							changed={(event)=>this.nameChangedHandler(event,person.id)}
							/>;
					})}
				</div> 
			);
			// style.backgroundColor='red';
			// style[':hover']= {
			// 	backgroundColor: 'salmon',
			// 	color: ''
			// }
		}
		let classes=[];
		if(this.state.persons.length<=2) {
			classes.push('red');
		}
		if(this.state.persons.length<=1) {
			classes.push('bold');
		}

		return (
				<div className="App">
					<p className={classes.join(' ')}>HI I AM HERE</p>
					<StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>toggle persons</StyledButton>
					{persons}
				</div>
		);
	}
};

export default App;

