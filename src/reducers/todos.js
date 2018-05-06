const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                date: action.date,
                completed: false
            };
        case 'DELETE_TODO':
            const newState = Object.assign([], state);
            console.log(state, action);
            const indexToDelete = state.findIndex(number => {
                return number.id == action.id
            });
            newState.splice(indexToDelete, 1);
            return newState;
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return Object.assign({}, state, {
                completed: !state.completed
            });

        default:
            return state
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
        ];
        case 'DELETE_TODO':
            return  todo(state,action);
        case 'TOGGLE_TODO':
            return state.map(t =>
                todo(t, action)
        );
        default:
            return state
    }
};

export default todos