import React from 'react';
import '../contentArea/contentArea.scss';

class Form extends React.Component{
  
    constructor(props){
        super(props);
        this.state = {
            text: 'po po she show',
            url: '',
            method: '',
        };
    }

    handleClick = event =>{
        event.preventDefault();
        
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
                    <button onClick={this.handleClick}>GO</button>
                </div>
                <div>
                    <input onChange = {this.handleMethod} type = "radio" id="get" name ="method" value="get"/>
                    <label for="get">GET</label>
                    <input  onChange = {this.handleMethod} type = "radio" id="post" name="method" value = "post"/>
                    <label for="post">POST</label>
                    <input onChange = {this.handleMethod}  type = "radio" id="put" name ="method" value="put"/>
                    <label for="put">PUT</label>
                    <input  onChange = {this.handleMethod} type = "radio" id="delete" name ="method" value="delete"/>
                    <label for="delete">DELETE</label>
                </div>
                <section className="Content">
                    <text-area>{this.state.method +'   '+ this.state.url}</text-area>
                </section>
            </div>
          
        )
    }

}

export default Form;