import React, {Component} from 'react';
import Allbooks from '../allbooks/Allbooks';
import './main.css';
import straipsniai from "../data/Straipsniai";
import Article from "../article/Article";



class Main extends Component{
  constructor(){
    super();
  }
  render() {
    const duomenysStraipsniai = straipsniai.map(straipsnis=>
      <Article data=
      {{key:straipsnis.id,
        title:straipsnis.pavadinimas,
        description:straipsnis.aprasymas
        }}/>)
    return (
      <main>
        <div className="row">
          {duomenysStraipsniai}
        </div>
        <Allbooks/>
      </main>
    )
  }
}
export default Main;