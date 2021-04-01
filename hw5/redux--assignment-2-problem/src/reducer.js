const initialState = {
    persons:  []
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case 'ADD':
            return {
                ...state,
                persons: state.persons.concat({id:Math.random(),
                name: 'Max', age: Math.floor( Math.random() * 40 )})
            }
        case 'DELETE': 
            const updatedPersons = state.persons.filter(person => {
                return person.id!==action.pid;
            });
            return {
                ...state,
                persons: updatedPersons
            }
        default:
            return state;
    }
};

export default reducer;
