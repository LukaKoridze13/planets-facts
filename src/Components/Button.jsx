import React, { useEffect, useState } from 'react'

export default function Button(props) {
    const [background, setBackground] = useState('transparent')
    function hover() {
        if (props.status !== 'active') {
            background === 'transparent' ? setBackground('rgba(216, 216, 216, 0.2)') : setBackground('transparent')
        }     
    }
    useEffect(()=>{
        props.status==='active' ? setBackground(props.color) : setBackground('transparent')               
    }, [props.status, props.color])
    return (
        <button onMouseEnter={hover} onMouseLeave={hover} className='infoChange' style={{ background }} onClick={props.onClick}>
            <p className="num">{props.num}</p>
            <p className="text">{props.text}</p>
        </button>
    )
}
