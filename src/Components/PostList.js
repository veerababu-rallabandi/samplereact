import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            posts:[],
            errormessage:''
        }
    }
    //Life cycle method
    componentDidMount()
    {
        axios.get("https://jsonplaceholder.typicode.com/posts1")
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        }).catch(error=>{
            console.log(error)
            this.setState({errormessage:"Error retrieving response Data."})
        })
    }
  render() {
    const {posts,errormessage}=this.state
    return (
      <div>
            List of Elements
            {
                posts.length ?
                posts.map(ele=><div key={ele.id} id={ele.id}>{ele.title}</div>):null
            }
            {errormessage?<div>{errormessage}</div>:null}
      </div>
    )
  }
}

export default PostList
