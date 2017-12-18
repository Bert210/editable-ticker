import React from 'react'

import './EditableTicker.css'

export default class EditableTicker extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState((prevState, props) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    decrement = () => {
        this.setState((prevState, props) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }

    toggleEdit = () => {
        let value = prompt("New Value")
        //Sanitize input
        value = parseInt(value, 10)

        if(!isNaN(value)){
            this.setState({
                counter: value
            })
        }

    }

    render(){
        return(
            <div className="et-main">
                <button onClick={this.increment}>+</button>
                <div onClick={this.toggleEdit}>{this.state.counter}</div>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}