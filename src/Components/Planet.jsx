import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Link from '../assets/icon-source.svg'
import Box from './Box'
import Button from './Button'
import MobileButtons from './MobileButtons'
export default function Planet(props) {
    const [info, setInfo] = useState('overview')
    let { planet } = useParams()
    let planeta = props.planets.find(pl => pl.name === planet)
    const [active, setActive] = useState(['active', 'passive', 'passive'])
    let Planeta = require(`../assets/planet-${planeta.name.toLowerCase()}.svg`)
    let PlanetInside = require(`../assets/planet-${planeta.name.toLowerCase()}-internal.svg`)
    let Geology = require(`../assets/geology-${planeta.name.toLowerCase()}.png`)
    const [image, setImage] = useState(Planeta)
    let Image = useRef()
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        setInfo('overview')
        setActive(['active', 'passive', 'passive'])
        setVisible(false)
    }, [planeta])
    useEffect(() => {
        active[0] === 'active' ? setImage(Planeta) : setImage(PlanetInside)
        active[2] === 'active' && setImage(Planeta)
    }, [active, Planeta, PlanetInside])
    return (
        <>
            <div className="mobile_header">
                <MobileButtons text='OVERVIEW' color={planeta.color} status={active[0]} onClick={() => { setInfo('overview'); setActive(['active', 'passive', 'passive']); setVisible(false) }} />
                <MobileButtons text='Structure' color={planeta.color} status={active[1]} onClick={() => { setInfo('structure'); setActive(['passive', 'active', 'passive']); setVisible(false) }} />
                <MobileButtons text='Surface' color={planeta.color} status={active[2]} onClick={() => { setInfo('geology'); setActive(['passive', 'passive', 'active']); setVisible(true) }} />
            </div>
            <main className='center'>
                <div className='planet-div'>
                    <img ref={Image} className='planet' src={image} alt={planeta.name} />
                    {visible && <img className='planet-in' style={{ position: 'absolute', top:'60%',left:'50%', width: '150px', transform: 'translate(-50%)' }} src={Geology} alt='Planet Geology' />}</div>
                <aside>
                    <div className='texts'>
                        <h2>{planeta.name}</h2>
                        <p>{planeta[info].content}</p>
                        <p className="link">Source: <a href={planeta[info].source}>Wikipedia <img src={Link} alt="Source Icon" /></a></p>
                    </div>
                    <div className='buttons'>
                        <Button num='01' status={active[0]} text='OVERVIEW' color={planeta.color} onClick={() => { setInfo('overview'); setActive(['active', 'passive', 'passive']); setVisible(false) }} />
                        <Button num='02' status={active[1]} text='Internal Structure' color={planeta.color} onClick={() => { setInfo('structure'); setActive(['passive', 'active', 'passive']); setVisible(false) }} />
                        <Button num='03' status={active[2]} text='Surface Geology' color={planeta.color} onClick={() => { setInfo('geology'); setActive(['passive', 'passive', 'active']); setVisible(true) }} />
                    </div>
                </aside>
            </main>
            <div className="infobox">
                <Box title='ROTATION TIME' number={planeta.rotation} />
                <Box title='REVOLUTION TIME' number={planeta.revolution} />
                <Box title='RASIUS' number={planeta.radius} />
                <Box title='AVERAGE TEMP.' number={planeta.temperature} />
            </div>
        </>
    )
}
