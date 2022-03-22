import React, { Component } from 'react'
import "./Random.css"

export default class Button extends Component {

message = () => alert("Esto es un shuffle")

    render() {
        return (
            <button onClick={this.props.shuffle} className="glow-on-hover">Get Random</button>
        )
    }
}