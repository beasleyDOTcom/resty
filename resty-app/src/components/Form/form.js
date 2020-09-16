import React from 'react';
import '../contentArea/Results.scss';

class Form extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            text: 'po po she show',
            url: '',
            method: 'get',
        };
    }
    
    handleSubmit = async event =>{
        event.preventDefault();
        // this.props.toggleLoading();

        let WWEraw = await fetch(this.state.url);
        let data = await WWEraw.json();
        let headers = {};
        WWEraw.headers.forEach((val, key)=> headers[key] = val)

        //https://swapi.dev/api/people/

        this.props.handleClick(data.count, data.results, headers);
    }

    handleURL = event => {
        let url = event.target.value;
        this.setState({url})
    }

    handleMethod = event =>{
        let method = event.target.value;
        this.setState({method});
    }

    render(){
        return (
            <div className="FORM">
                <div>
                    <input onChange = {this.handleURL}/>
                    <button onClick={this.handleSubmit}>{this.props.prompt}</button>
                </div>
                <div>
                    <input onChange = {this.handleMethod} type = "radio" id="get" name ="method" value="get" checked/>
                    <label htmlFor="get">GET</label>
                    <input  onChange = {this.handleMethod} type = "radio" id="post" name="method" value = "post"/>
                    <label htmlFor="post">POST</label>
                    <input onChange = {this.handleMethod}  type = "radio" id="put" name ="method" value="put"/>
                    <label htmlFor="put">PUT</label>
                    <input  onChange = {this.handleMethod} type = "radio" id="delete" name ="method" value="delete"/>
                    <label htmlFor="delete">DELETE</label>
                </div>
                <section className="Content">
                    <text-area>{this.state.method +'   '+ this.state.url}</text-area>
                </section>
            </div>
          
        )
    }

}

export default Form;