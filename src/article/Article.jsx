import React from 'react'
import "../main/Main"
import straipsniai from "../data/Straipsniai"

export default function Article(props) {
    return (
        <>
        <div className="article">
            <h1>{props.data.key}</h1>
            <p>{props.data.title}</p>
            <p>{props.data.description}</p>
        </div> 
        </>  
    )
}