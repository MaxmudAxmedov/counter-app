import React, {Component} from "react";

class Item extends Component{
    state = {
        counter: this.props.counter,
        population: this.props.population,
        flag: this.props.flag
    }

    render() {
        return <li className="item">
            <img className="img" src={this.state.flag}/>
            <p>Counter Name: {this.state.counter}</p>
            <p>Population: {this.state.population}</p>
            {console.log(this.state)}
        </li>
    }
}

export default Item;