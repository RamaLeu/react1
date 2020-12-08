import React from 'react'
import "../main/Main"
import './Article.css';

export default function Article(props) {
    return (
        <>
        <div className="article">
            <p>{props.data.description}</p>
        </div> 
        </>  
    )
}