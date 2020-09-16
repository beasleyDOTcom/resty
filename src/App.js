import React from 'react';
import './components/Form/Form.scss';
import md5 from 'md5';
import axios from'axios';

import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';
import Results from './components/contentArea/Results.js'


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
      }
    }
  }
// popo
  toggleLoading = () =>{
    this.setState({loading: !this.state.loading});
  }

  submitHandler = (request) => {
   this.setState({request});
  }

  updateHistory(request){

    let hash = md5(JSON.stringify(request));
  
    const history = {...this.state.history, [hash]: request }
  }

  render(){ 
    return (
    <div className="Form">
      <Header/>
      <Form handleClick={this.submitHandler}/>
      <Results request={this.state.request}/>
      <Footer/>
    </div>
    );
  }
}


export default App;
