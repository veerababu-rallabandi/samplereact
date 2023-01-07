import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    ChangeHandler = (e) => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    submitHandler=event=>{
        event.preventDefault()//To avoid page refresh
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then(response=>{
            console.log(response)
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {
        const { userId, title, body } = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                <div>
                    <input
                        type="text"
                        name="userId"
                        value={userId}
                        onChange={this.ChangeHandler}
                    />
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={this.ChangeHandler} />
                </div>
                <div>
                    <input type="text" name="body" value={body} onChange={this.ChangeHandler} />
                </div>
                <button type="submit">submit</button>
            </div>
            </form>
        )
    }
}

export default PostForm
