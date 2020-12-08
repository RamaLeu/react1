import React from 'react';
import Sell from '../sell/Sell';
import './book.css';
export default function Book(props) {
    

    return (
        <>
         <div className="book">
            <img src={props.source}  className="img"/>
            <p className="author">{props.author}</p>
            <p className="title">{props.title}</p>
            <p className="price">{props.price}</p>
            <Sell/>
        </div>   
        </>
    )
}