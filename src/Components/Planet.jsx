import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Link from '../assets/icon-source.svg'
import Box from './Box'
import Button from './Button'
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
    const [left, setLeft] = useState(0)
    const [top, setTop] = useState(0)
    const [visible, setVisible] = useState(false)
    function getStats() {
        setLeft(Image.current.getBoundingClientRect().x + Image.current.getBoundingClientRect().width / 2 - (163 / 2))
        setTop(Image.current.getBoundingClientRect().y + Image.current.getBoundingClientRect().height / 7 * 5)
    }
    useEffect(() => {
        getStats();
    })
    useEffect(() => {
        setInfo('overview')
        setActive(['active', 'passive', 'passive'])
        setVisible(false)
        console.log('test')
    }, [planeta])
    useEffect(() => {
        active[0] === 'active' ? setImage(Planeta) : setImage(PlanetInside)
        active[2] === 'active' && setImage(Planeta)
    }, [active, Planeta, PlanetInside])
    return (
        <>
            <main className='center'>
                <img ref={Image} className='planet' src={image} alt={planeta.name} />
                {visible && <img style={{ position: 'absolute', top, left, width: '163px' }} src={Geology} alt='Planet Geology' />}
                <aside>
                    <div>
                        <h2>{planeta.name}</h2>
                        <p>{planeta[info].content}</p>
                        <p className="link">Source: <a href={planeta[info].source}>Wikipedia <img src={Link} alt="Source Icon" /></a></p>
                    </div>
                    <div>
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
