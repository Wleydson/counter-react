import React, {Component} from 'react'

export default class Counter extends Component{
    state = {
        number: 0
    }
    increment = () =>{
        this.setState({number: this.state.number + 1})
    }

    decrement = () =>{
        this.setState({number: this.state.number - 1})
    }

    changeNumber = (dif) =>{
        this.setState({
            number: this.state.number + dif
        })
    }

    render() {
        return (
            <div>
                <div>Count: {this.state.number}</div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={() => this.changeNumber(10)}>Increment 10</button>
                <button onClick={() => this.changeNumber(-10)}>Decrement 10</button>
            </div>
        )
    }
}