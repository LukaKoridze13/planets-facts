import React from 'react'
import Right from '../assets/icon-chevron.svg'
import { NavLink } from 'react-router-dom'
export default function NavigateMobile(props) {
    return (
        <NavLink to={`/planets-facts/${props.name}`} onClick={props.onClick}>
            <li className='between'>
                <div className="left center">
                    <div className="ball" style={{ width: '20px', height: '20px', marginRight: '25px', borderRadius: '50%', background: props.color }}></div>
                    <p>{props.name}</p>
                </div>
                <img src={Right} alt="Right Arrow" />
            </li>
        </NavLink>
    )
}
