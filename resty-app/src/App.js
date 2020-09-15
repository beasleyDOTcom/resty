import React from 'react';
import './components/Form/Form.scss';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Form from './components/Form/form.js';

function App() {
  return (
    <div className="Form">
      <Header/>
      <Form/>
      <Footer/>
    </div>
  );
}



export default App;
