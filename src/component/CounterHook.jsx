import React, {useState, useEffect} from 'react'

export default () =>{
    const[count, setCount] = useState(0)
    const[status, setStatus] = useState('Par')

    useEffect(() => {
        count % 2 == 0 ? setStatus('Even') : setStatus('Odd')
    })

    return(
        <div>
            <div>Count: {count} - {status}</div>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(count + 10)}>Increment 10</button>
            <button onClick={() => setCount(count - 10)}>Decrement 10</button>
        </div>
    )
}