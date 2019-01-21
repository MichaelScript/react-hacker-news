import React, { Component } from 'react';
import './styles.css'
export default class Item extends Component {
    render(){
        return (
            <div className="post">
                {this.props.index} <a href={this.props.link}>{this.props.title}</a>
                <span className="backlink">({this.props.link})</span>
            </div>
        )
    }
}