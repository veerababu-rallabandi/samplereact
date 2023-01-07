import React, { useContext } from 'react'
import { UserContext, admincontext } from '../App'

function FunctionComponentE() {
    const user = useContext(UserContext)
    const admin = useContext(admincontext)
    return (
        <div>
            {admin}-{user}
        </div>
    )
}

export default FunctionComponentE
