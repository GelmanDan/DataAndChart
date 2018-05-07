const value = (state, action) => {
    switch (action.type) {
        case 'ADD_VALUE':
            return {
                id: action.id,
                text: action.text,
                date: action.date,
                completed: false
            };
        case 'DELETE_VALUE':
            const newState = Object.assign([], state);
            const indexToDelete = state.findIndex(number => {
                return number.id == action.id
            });
            newState.splice(indexToDelete, 1);
            return newState;

        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_VALUE':
            return [
                ...state,
                value(undefined, action)
        ];
        case 'DELETE_VALUE':
            return  value(state,action);
        default:
            return state
    }
};

export default todos