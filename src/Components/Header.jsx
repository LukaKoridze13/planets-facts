import React, { useEffect, useState } from 'react'
import Navigate from './Navigate'
import Burger from '../assets/icon-hamburger.svg'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import NavigateMobile from './NavigateMobile'
export default function Header(props) {
    let navigate = useNavigate()
    let location = useLocation()
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        if (location.pathname === '/planets-facts' || location.pathname === '/planets-facts/') {
            navigate('/planets-facts/Mercury')
        }
    })
    return (
        <>
            <header className='between'>
                <h1>THE PLANETS</h1>
                <nav className='center'>
                    <ul className='center'>
                        {props.planets.map((planet) => {
                            return <Navigate name={planet.name} color={planet.color} key={planet.name} />
                        })}
                    </ul>
                    <img onClick={(e) => { if (visible) { setVisible(false); e.target.style.opacity = '1' } else { setVisible(true); e.target.style.opacity = '0.5' } }} src={Burger} alt="Navigation Menu Icon - Hamburger" />
                </nav>
            </header>
            {visible && <nav className="mobile">
                <ul>
                    {props.planets.map((planet) => {
                        return <NavigateMobile onClick={()=>{visible && setVisible(false)}} name={planet.name} color={planet.color} key={planet.name} />
                    })}
                </ul>
            </nav>}
            {!visible && <Outlet />}
        </>
    )
}
