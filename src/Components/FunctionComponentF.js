import React from 'react'
import { UserContext, Admincontext } from '../App'

function FunctionComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <Admincontext.Consumer>
                            {
                                admin => {
                                    return (
                                        <div>My name is {admin} and {user}</div>
                                    )
                                }
                            }
                        </Admincontext.Consumer>
                    )
                }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default FunctionComponentF
