import React, { Component } from 'react'
import { UserContext, admincontext } from '../App'

export class ComponentF extends Component {
  render() {
    return (
      <div>
        {/* step 3: To use consumer to set value */}

        <UserContext.Consumer>
          {user => {
            return (
              <admincontext.Consumer>
                {
                  admin => {
                    return (
                      <div>My name is {user} & I am is {admin}</div>
                    )
                  }}
              </admincontext.Consumer>
            )

          }}
        </UserContext.Consumer>

      </div>
    )
  }
}

export default ComponentF
