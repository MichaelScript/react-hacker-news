import React, { Component } from 'react';
import logo from './logo.svg';
import List from './components/list'
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
        "time":new Date()},
      {
        "title":"Mozilla Developer Network",
      "link":"https://developer.mozilla.org/en-US/",
      "time":new Date()},
      {
        "title":"Getting started in react",
        "link":"https://reactjs.org/docs/getting-started.html",
        "time":new Date()
      }
      ]
    }
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

  addPost(link,title){
    let newArticles = this.state.articles.slice();
    if(title !== undefined && link !== undefined){
      newArticles.push({
        "title":title,
        "link":link,
        "time":new Date()
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
        <header className="App-header">
          <Overlay hideOverlay={()=>{this.hideOverlay()}} showOverlay={this.state.showOverlay}>
          <NewPost hideOverlay={()=>{this.hideOverlay()}} addPost={(title,link)=>{this.addPost(title,link)}} ></NewPost>
          </Overlay>
          <Title></Title>
          <List items={this.state.articles}></List>
          <Fab onClick={()=>{this.showOverlay()}}></Fab>
        </header>
      </div>
    );
  }
}

export default App;
