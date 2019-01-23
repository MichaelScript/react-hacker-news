import React, { Component } from 'react';
import Item from './Item'
export default class List extends Component {
    render(){
        const items = this.props.items;
        const listItems = items.map((item,i)=>{
            /* Assigning the original index as the id
            so we can reference it later after we sort
            the list */
            item["id"] = i;
            return item
        }).sort((a,b)=>{
            return b.votes - a.votes;
        }).map((item,i)=>{
            return <div key={i}>
                <Item downvote={this.props.downvote} upvote={this.props.upvote} index={i + 1}  {...item}></Item>
            </div>
        })
        return (<div className="posts-container">
            {listItems}
        </div>)
    }
}