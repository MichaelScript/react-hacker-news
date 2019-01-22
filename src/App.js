import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/List'
import Title from './components/Title'
import Fab from './components/Fab'
import Overlay from './components/Overlay'
import NewPost from './components/NewPost';

class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      showOverlay: false,
      articles:[
        {"title":"Google Homepage",
      "link":"https://google.com",
        "time":new Date(),
        "votes":3},
      {
        "title":"Mozilla Developer Network",
      "link":"https://developer.mozilla.org/en-US/",
      "time":new Date(),
      "votes":10
      },
      {
        "title":"Getting started in react",
        "link":"https://reactjs.org/docs/getting-started.html",
        "time":new Date(),
        "votes":13
      }
      ]
    }
    this.upvote = this.upvote.bind(this)
    this.downvote = this.downvote.bind(this)

  }

  showOverlay(){
    this.setState({
      "showOverlay":true
    })
  }

  hideOverlay(){
    this.setState({
      "showOverlay":false
    })
  }

  upvote(id){
    let articles = this.state.articles.slice()
    articles[id].votes += 1;
    this.setState({
      articles:articles
    })
  }
  downvote(id){
    let articles = this.state.articles.slice()
    articles[id].votes -= 1;
    this.setState({
      articles:articles
    })
  }

  addPost(link,title){
    let newArticles = this.state.articles.slice();
    if(title !== undefined && link !== undefined){
      /* Automatically adding in http if the link provided
      doesn't have it*/
      if (!link.match(/^[a-zA-Z]+:\/\//))
      {
          link = 'http://' + link;
      }
      newArticles.push({
        "title":title,
        "link":link,
        "time":new Date(),
        "votes":0
      });
      this.setState(
        {
          "articles":newArticles
        }
      )  
    }
    }

  render() {
    return (
      <div className="App">
        <Overlay hideOverlay={()=>{this.hideOverlay()}} showOverlay={this.state.showOverlay}>
        <NewPost hideOverlay={()=>{this.hideOverlay()}} addPost={(title,link)=>{this.addPost(title,link)}} ></NewPost>
        </Overlay>
        <Title></Title>
        <List downvote={this.downvote} upvote={this.upvote} items={this.state.articles}></List>
        <Fab onClick={()=>{this.showOverlay()}}></Fab>
      </div>
    );
  }
}

export default App;
