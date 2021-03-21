import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
	const toggleBtnRef=useRef(null);
	const authContext = useContext(AuthContext);

	console.log(authContext.authenticated);

	useEffect(
		() => {
			console.log('[Cockpit.js] useEffect');
			// Http request...
			// const timer = setTimeout(() => {
			// 	alert('Saved data to cloud!');
			// }, 1000);
			toggleBtnRef.current.click(); 
			return () => {
				// clearTimeout(timer);
				console.log('[Cockpit.js] cleanup work in useEffect');
			};
		},
		[ props.persons ]
	);

	let assignedClasses = [];
	let btnClass = [ classes.Button ];

	if (props.showPersons) {
		btnClass.push(classes.Red);
	}
	if (props.personsLength <= 2) {
		assignedClasses.push(classes.red);
	}
	if (props.personsLength <= 1) {
		assignedClasses.push(classes.bold);
	}
	return (
		<div className={classes.Cockpit}>
			<h1>{props.title}</h1>
			<p className={assignedClasses.join(' ')}>This is really working</p>
			<button ref={toggleBtnRef} className={btnClass.join(' ')} onClick={props.clicked}>
				toggle persons
			</button>
			<button className={btnClass.join(' ')} onClick={authContext.login}>Log in</button>
		</div>
	);
};

export default React.memo(cockpit);
