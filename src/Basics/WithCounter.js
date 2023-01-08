import React from 'react'

//UpdatedComponent accepts OriginalComponent and return NewComponent.
const updatedComponent = OriginalComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + 1 }
            })
        }

        render() {
            return (
                <OriginalComponent
                    count={this.state.count}
                    incrementcount={this.incrementCount}
                />
            )
        }
    }
    return NewComponent
}
export default updatedComponent
