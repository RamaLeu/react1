import React from "react"

function Search(props) {
    if(props.data.Response !== "False"){
    return (
        <div className="container">

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Director</th>
                        <th>Runtime</th>
                        <th>Foto</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>{props.data.Title}</td>
                        <td>{props.data.Plot}</td>
                        <td>{props.data.Director}</td>
                        <td>{props.data.Runtime}</td>
                        <td><img src = {props.data.Poster}/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
    } else return(<h3>Nope</h3>)
}

export default Search;