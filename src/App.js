import React from 'react';
import './components/Form/Form.scss';
import md5 from 'md5';
import axios from'axios';

import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';
import Results from './components/contentArea/Results.js'
import History from './components/History/History.js'
import { request } from 'http';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      history: {},
      request:{
        count:0,
        results: [],
        headers:{},
      },
      response: {},
    }
  }

  toggleLoading = () =>{
    this.setState({loading: !this.state.loading});
  }

  submitHandler = (request) => {
   this.setState({request});
  }

  updateHistory(request){

    let hash = md5(JSON.stringify(request));
  
    const history = {...this.state.history, [hash]: request };

    this.setState({history}, ()=>{
      localStorage.setItem('history', JSON.stringify(this.state.history));
    });
  };

  updateResults = (headers, results)=>{
// let request = {
// headers: headers,
// results: results,
// }
let response = results;
    this.setState({...request, headers, response});
    console.log('this is the state', this.state)
    console.log('this is request', results, headers)
  };

  updateRequest = (request) =>{
 
    this.setState({request});
  };

  fetchResults = async (request) =>{
    try{
      this.toggleLoading();
      this.updateRequest(request);

      let response = await axios(request);
      this.toggleLoading();
      this.updateHistory(request);
      console.log(response.headers, 'this is resonse headers');
      this.updateResults(response.headers, response.data);
    }
    catch(error){
      console.error(error);
    }
  }

  componentDidMount(){
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({history});
  }

  render(){ 
    return (
    <div className="Form">
      <Header/>
      <Form request={this.state.request} handler={this.fetchResults}/>
      <section>
        <History handler={this.updateRequest} calls={this.state.history}/>
        <Results loading={this.state.loading} header={this.state.headers} request={this.state.request} response={this.state.response}/>
      </section>
      <Footer/>
    </div>
    );
  }
}


export default App;
