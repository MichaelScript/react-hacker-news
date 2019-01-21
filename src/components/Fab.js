import React, {Component} from 'react';

export default class Fab extends Component{

    render(){
        return (<button onClick={this.props.onClick} className="Fab">
            Create Post+
        </button>)
    }
}