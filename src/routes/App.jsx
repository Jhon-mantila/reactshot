import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/global.css';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';


//rafce

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact patch="/login" component={Login}/>
        <Route exact patch="recovery-password" component={RecoveryPassword}/>
        <Route component={NotFount} />
      </Layout>
    </Switch>
    </BrowserRouter>

  );//Layout permite componentes hijos
  //Login no tiene componentes hijos
}

export default App;

