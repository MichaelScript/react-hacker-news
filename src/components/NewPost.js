import React, {Component} from 'react';

export default class NewPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            "linkInput":"",
            "titleInput":""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleChangeTitle = this.handleChangeTitle.bind(this)
        this.createPost = this.createPost.bind(this)
    }
    
    handleChange(event) {
        this.setState({linkInput: event.target.value});
    }

    handleChangeTitle(event) {
        this.setState({titleInput: event.target.value});
    }

    createPost(event) {
        this.props.addPost(this.state.linkInput,this.state.titleInput);
        this.setState(
            {
                linkInput:"",
                titleInput:""
            }
        )
        this.props.hideOverlay();
        event.preventDefault();
    }

    render(){
        return (
        <form onSubmit={this.createPost}>
            <label className="linkLabel">
                Link <input onChange={this.handleChange} value={this.state.linkInput} className="linkInput"></input>
            </label>
            <label className="titleLabel">
                Title <input onChange={this.handleChangeTitle} value={this.state.titleInput} className="titleInput"></input>
            </label>
            <input className="submitPost" type="submit"></input>
        </form>
        )
    }

}