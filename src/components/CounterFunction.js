import React, { useState, useEffect } from 'react';

function CounterFunction(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        document.title = `Clicked ${count} times`
        console.log({ count })
    }, [count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count}</button>
            <p>{JSON.stringify(name)}</p>
            <p>{count}</p>
        </div>
    );
}

export default CounterFunction;