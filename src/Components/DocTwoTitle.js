import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocTwoTitle() {

    const [count, setCount] = useState(0)

   useDocumentTitle(count)
    return (
        <div>
            {/* JSX */}
            <button onClick={() => setCount(count + 1)}>Count -{count}</button>
        </div>
    )
}
export default DocTwoTitle
