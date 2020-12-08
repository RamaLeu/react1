import React, {Component} from 'react';

export default class Sell extends Component{
    constructor(){
        super()
        this.state={
            stock: 5
        }
    }
    onClick(){
        console.log(this.state.message)
        if (this.state.stock >0){
        this.setState({
            stock : this.state.stock - 1
        })
        }
        console.log(this.state.message)
    }
    render(){
        return(
            <div>
                <p>Left in stock: {this.state.stock}</p>
                <button onClick={this.onClick.bind(this)}>Buy Now</button>
            </div>
        )
    }
}