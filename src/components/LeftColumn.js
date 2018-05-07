import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import React from 'react'
import FaCaretRight from 'react-icons/lib/fa/caret-right'
import FaCaretLeft from 'react-icons/lib/fa/caret-left'

class LeftColumn extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {hidden: true};
    }

    onClick() {
        this.setState((prevState, props) => ({
            hidden: !(prevState.hidden)
        }))
    }

    render() {

        return <div className="leftColumn">
            <ReactCSSTransitionGroup
                transitionName="toggle"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>

                {this.state.hidden ?
                    (<div className="leftColumn-arrow-right"><FaCaretRight size={90} onClick={this.onClick}/></div>
                    ):(<div className="leftColumn-arrow-left"><FaCaretLeft size={90} onClick={this.onClick}/></div>)}
                {this.state.hidden ? null : <div className="toggle-left"></div>}
            </ReactCSSTransitionGroup>
        </div>
    }
}

export default LeftColumn;