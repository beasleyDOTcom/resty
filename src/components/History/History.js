import React from 'react';

function History(props){
    const calls = props.calls || {};
    console.log(props,'===============this is props in H I S T O R Y', props.calls)

    function loadRequest(apiCall){
        props.handler(apiCall);
    }

    return (
        <aside className="history">
            <h1>I'm a history of your lyyyyfe</h1>
            <ul>
                {
                    Object.keys(calls).map(key =>
                        <li key={key}>
                            <span className={`method ${props.calls[key].method}`}>{props.calls[key].method}</span>
                            <button className="url" onClick={()=> loadRequest(props.calls[key])}>{props.calls[key].url}</button>
                        </li>
                    )
                }
            </ul>
        </aside>
    )
}

export default History;

