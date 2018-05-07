import { connect } from 'react-redux'
import { toggleTodo, deleteValue } from '../actions'
import ValuesList from '../components/ValuesList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
};

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
            deleteValue: (id) => {
                dispatch(deleteValue(id))
            }
}
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ValuesList);

export default VisibleTodoList