import React from 'react'
import AddTodo from '../containers/AddTodo'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import VisibleTodoList from '../containers/VisibleTodoList'


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <LeftColumn />
                <VisibleTodoList />
                <RightColumn />
            </div>
        );
        /*
         <div>
         <div onClick={this.onClick}>Click me1</div>
         <Toggle hidden={this.state.hidden}>I am toggle</Toggle>
         <div>Something else.</div>
         </div>;*/
    }
}

export default App;
/*
 const App = () => (
 <div className="container">
 <div className="leftColumn"></div>
 <VisibleTodoList />
 <div className="rightColumn"></div>
 </div>
 )

 export default App
 */