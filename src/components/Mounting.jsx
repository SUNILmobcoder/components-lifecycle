import React, { Component } from 'react';
import reactDom from 'react-dom';

export default class Mounting extends Component {
    // initially called in mounting - 1
    constructor (props) {
        super(props);
        this.state = {color:"red"};
    }

    // called befor reder mounting - 2 updating -1
    // did'nt work in my case
    static getDerivedStateFromProps(props, state) {
        return ({color:props.favcol})
    }

    // called after reder mounting - 4
    componentDidMount() {
        setTimeout( () => {
            this.setState({color:"blue"})
        },3000)
    }

    // creating change color method
    changeColor = () => {
        this.setState({color:"purple"})
    }

    // called in updating -2
    // used for specify that react should contineu with rendering or not
    shouldComponentUpdate() {
        return true;
    }

    // called during updaing -4 before value update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("d1").innerHTML = 'Before the update : ' + prevState.color;
    }
    // called during updaing -5 after value update
    componentDidUpdate() {
        document.getElementById("d2").innerHTML = 'After the update : ' + this.state.color;
    }
    // mounting - 3 updating -3
    render() {
        return (
            <div>
                <h1>My favorate color is {this.state.color}</h1>
                <button type="button" onClick={this.changeColor} >Change Color name to purple</button>
                <div id="d1"></div>
                <div id="d2"></div>
            </div>
        )
    }
}
