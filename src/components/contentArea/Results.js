import React from 'react';
import './Results.scss';
import ReactJson from 'react-json-view';
export default function (props){
    return (
        <section className="Content">

            {
                props.loading? (
                    
                <h1 className="loading">omg.... why is this taking so long????</h1>
                    
                ) : (
                    <>
                    <h1> Results From API:</h1>
                    <h3>Count: {props.response.count}</h3>
                    <h1> Headers: 
                    <ReactJson src={props.header}/></h1>
                    <h1>Results:</h1>
                     < ReactJson src={props.response}/>
                    {/* <ReactJson src={props.results}/> */}
                    {/* <p>Results: {JSON.stringify(props.results)}</p> */}
                    </>
                )
            }
            
        </section>
    )
}
{/* <Results loading={this.state.loading} request={this.state.request} response={this.state.response}/> */}