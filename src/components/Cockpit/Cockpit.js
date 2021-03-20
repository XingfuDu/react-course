import React from 'react';
import classes from './Cockpit';

const cockpit=(props)=> {
    let classes=[];
    if(props.persons.length<=2) {
        classes.push('red');
    }
    if(props.persons.length<=1) {
        classes.push('bold');
    }
    return ( <div>
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button className={classes.hover} 
                onClick={props.clicked}>toggle persons</button>
            </div>
    );
}

export default cockpit;