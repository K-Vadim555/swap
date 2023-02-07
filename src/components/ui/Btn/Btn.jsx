import React from 'react'
import "./Btn.scss"

export default function Btn({type,text, func}) {
    return (
        <button type={type} className="btn" onClick={func}>{text}</button>
    )
}