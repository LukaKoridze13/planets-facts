import React, { useState,useRef } from 'react'
import { NavLink } from 'react-router-dom'
export default function Navigate(props) {
    const [visible, setVisible] = useState(false)
    const [width,setWidth] = useState(0)
    const [left, setLeft] = useState(0)
    const li = useRef()
    const backgroundColor = props.color
    function hover() {
        setWidth(li.current.getBoundingClientRect().width)
        setLeft(li.current.getBoundingClientRect().x)
        setVisible(true)
    }
    function out(){
        setVisible(false)
    }
    return (
        <>
            <li onMouseEnter={hover} onMouseLeave={out} ref={li}><NavLink to={`/planets-facts/${props.name}`}>{props.name}</NavLink></li>
            {visible && <div style={{width, left, backgroundColor, height:'4px', top:'0px', position:'absolute'}}></div>}
        </>
    )
}
