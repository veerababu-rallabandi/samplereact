import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFectingOne() {
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState('')
    const [post, setposts] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setloading(false)
                seterror('')
                setposts(response.data)
            }).catch(error => {
                setloading(false)
                setposts({})
                seterror('something went wrong')
            })
    }, []) //[]-means only one time call bcoz given [] empty no depencies.
    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}
export default DataFectingOne
