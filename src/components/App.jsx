import React from 'react';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Login from '../containers/Login';

//rafce

const App = () => {
  return (
    <Layout> 
      <Login/>
    </Layout>
  );//Layout permite componentes hijos
  //Login no tiene componentes hijos
}

export default App;

