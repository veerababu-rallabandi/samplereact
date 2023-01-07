import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initalstate = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'Fetch_Success':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'Fetch_Error':
            return {
                loading: false,
                error: 'something went wrong',
                post: {}
            }
        default:
            return state

    }
}
function DataFetchingTwo() {
    const [statevalue, dispatch] = useReducer(reducer, initalstate)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type: 'Fetch_Success', payload: response.data })
            }).catch(error => {
                dispatch({ type: 'Fetch_Error' })
            })
    }, []) //[]-means only one time call bcoz given [] empty no depencies.

    return (
        <div>
            {statevalue.loading ? 'Loading' : statevalue.post.title}
            {statevalue.error ? statevalue.error : null}
        </div>
    )
}
export default DataFetchingTwo
