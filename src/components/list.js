import React, { Component } from 'react';
import Item from './item'
export default class List extends Component {
    render(){
        const items = this.props.items;
        const listItems = items.sort((a,b)=>{
            return b.votes - a.votes;
        }).map((item,i)=>{
            return <div>
                <Item index={i + 1} votes={item.votes} time={item.time} title={item.title} link={item.link}></Item>
            </div>
        })
        return (<div class="posts-container">
            {listItems}
        </div>)
    }
}