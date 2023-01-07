import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataFetching() {
    const [post,setpost]=useState({})//json data
    const [id,setId]=useState(1)
    const [IdfromButtonclick,setIdfromButtonclick]=useState(1)

    const handleclick=()=>{
        setIdfromButtonclick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res.data)
            setpost(res.data)
        }).catch(error=>{
            console.log('something wrong')
        })
    },[IdfromButtonclick])//[] - IdfromButtonclick is dependency
  return (
    
    <div>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button type="button" onClick={handleclick}>Display</button>
       <div>{post.title}</div>
    </div>
  )
}
export default DataFetching
