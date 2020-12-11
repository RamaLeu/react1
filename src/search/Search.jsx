import React from "react"
import './Search.css';

function Search(props) {
    if(props.data.Response !== "False"){
    return (
        <div className="container">

            <table className="table">
                <thead>
                    <tr>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <div className="line">
                        <td className="text"></td>
                        <td className="text">{props.data.Title}</td>
                        <td className="text">{props.data.Plot}</td>
                        <td className="text">{props.data.Director}</td>
                        <td className="text">{props.data.Runtime}</td>
                        <td className="text"><img src = {props.data.Poster}/></td>
                        </div>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    } else return(<h3>Nope</h3>)
}

export default Search;