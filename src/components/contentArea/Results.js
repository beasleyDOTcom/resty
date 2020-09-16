import React from 'react';
import './Results.scss';
import ReactJson from 'react-json-view';
export default function (props){
    return (
        <section className="Content">
            <h1> Results From API:</h1>
            <h3>Count: {props.request.count}</h3>
            <h1> Headers: <ReactJson src={props.request.headers}/></h1>
            <h1>Results:</h1>
        < ReactJson src={props.request.results}/>
            {/* <ReactJson src={props.results}/> */}
            {/* <p>Results: {JSON.stringify(props.results)}</p> */}
        </section>
    )
}
