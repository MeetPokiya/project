import React, { useState } from 'react'

export default function StateFun() {

    const [id, setId] = useState(101);
    const [name, setName] = useState('meet');

    const change = () => {
        setId(102);
    }

    return (
        <>
            <div>
                {id}
                <button onClick={() => change()}>
                    change id
                </button>
            </div>

            <div>
                {name}
                <button onClick={() => setName('mitu')}>
                    change name
                </button>
            </div>
        </>
    )
}