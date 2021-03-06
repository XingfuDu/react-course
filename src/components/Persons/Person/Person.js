import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
	constructor(props) {
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		this.inputElementRef.current.focus();
		console.log(this.context.authenticated);
	}
	render() {
		console.log('[Person.js] rendering...');
		return (
			<WithClass classes={classes.Person}>
				{this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
				<p key="i1" onClick={this.props.click}>
					{' '}
					I am {this.props.name} and I am {this.props.age} year old!
				</p>
				<p key="i2">{this.props.children}</p>
				<input
					ref={this.inputElementRef}
					key="i3"
					type="text"
					spellCheck="false"
					onChange={this.props.changed}
					value={this.props.name}
				/>
			</WithClass>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};
export default Person;
