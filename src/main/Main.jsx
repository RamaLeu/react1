import React, {Component} from 'react';
import Allbooks from '../allbooks/Allbooks';
import './main.css';
import straipsniai from "../data/Straipsniai";
import Article from "../article/Article";
import Form from "../form/Form";



function Main(){
  return(
    <div className="container">
      <Form/>
    </div>
  )
}
export default Main;