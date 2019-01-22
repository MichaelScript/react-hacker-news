import React, { Component } from 'react';
import Moment from 'react-moment';
import './styles.css'
export default class Item extends Component {
    render(){
        return (
            <div className="post">
                <div className="post-number">{this.props.index}.</div>
                <div className="voting">
                <span onClick={()=>{this.props.upvote(this.props.id)}} className="vote noselect">⬆</span>
                <span onClick={()=>{this.props.downvote(this.props.id)}} className="vote noselect">⬇</span>
                </div>
                <a href={this.props.link}>{this.props.title}</a>
                <span className="backlink"> ({this.props.link})</span>
                <div className="votes">{this.props.votes} points</div>
                <div className="date"><Moment fromNow>{this.props.time.toString()}</Moment></div>
            </div>
        )
    }
}