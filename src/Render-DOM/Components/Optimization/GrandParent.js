import React, { useState } from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

const GrandParent = () => {
    const [newcount, setnewcount] = useState(0)

    return (
        <div>
            <button onClick={() => { setnewcount((c) => c + 1) }}>
                Grand Parnet count is {newcount}
            </button>

            <ParentOne newcount={newcount}>
                <ChildOne />
            </ParentOne>
        </div>
    )
}

export default GrandParent
