import React from 'react'
import LeftColumn from './LeftColumn'
import RightColumn from './RightColumn'
import VisibleValuesList from '../containers/VisibleValuesList'


class App extends React.Component {

    render() {
        return (
            <div className="container">
                <LeftColumn />
                <VisibleValuesList />
                <RightColumn />
            </div>
        );
    }
}

export default App;