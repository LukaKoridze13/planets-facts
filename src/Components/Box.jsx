import React from 'react'

export default function Box(props) {
  return (
    <div className="box">
        <p className="title">{props.title}</p>
        <p className="number">{props.number}</p>
    </div>
  )
}
