let nextTodoId = 0;
export const addTodo = (text) => {
    //let date = new Date(Date.UTC(2018, 11, 1, 0, 0, 0));
    var today = new Date();
    var h = (today.getHours()<10?'0':'') + today.getHours();
    var m = (today.getMinutes()<10?'0':'') + today.getMinutes();
    var s = (today.getSeconds()<10?'0':'') + today.getSeconds();
    var date = h.toString()+":"+m.toString()+":"+s.toString();

    return {
        date:  (date),
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}