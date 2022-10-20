import React from 'react'
import { useState,useEffect } from 'react'
export default function MobileButtons(props) {
    const [borderBottom, setBorderBottom] = useState('none')
    const [color, setColor] = useState('#ffffff7b')
    useEffect(() => {
        props.status === 'active' ? setBorderBottom(`4px solid ${props.color}`) : setBorderBottom('none')
        props.status === 'active' ? setColor(`white`) : setColor('#ffffff7b')
    }, [props.status, props.color])
    return (
        <button className='infoChangeMobile' style={{ borderBottom, color }} onClick={props.onClick}>
            {props.text}
        </button>
    )
}
