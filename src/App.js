import React from 'react';
import './components/Form/Form.scss';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';
import Results from './components/contentArea/Results.js'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      count:0,
      results: [],
      headers:{},
    }
  }
// popo
  toggleLoading = () =>{
    this.setState({loading: !this.state.loading});
  }

  submitHandler = (count, results, headers) => {
    this.setState({count, results, headers});
  }

  render(){ 
    return (
    <div className="Form">
      <Header/>
      <Form prompt="GO" handleClick={this.submitHandler}/>
      <Results count={this.state.count} results={this.state.results} headers={this.state.headers}/>
      <Footer/>
    </div>
    );
  }
}


export default App;
