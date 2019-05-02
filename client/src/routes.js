import React from 'react';
import {Switch, Route } from "react-router-dom"
import GameView from './components/Book';
import Home from "./components/Home/home"
import Layout from "./hoc/layout"
import Login from "./containers/Admin/login"
import Auth from './hoc/Auth/auth'

const Routes = () => {
    return (
    <Layout>
        <Switch>
          <Route path="/" exact component={Auth(Home)}/>    
          <Route path="/login" exact component={Login}/>
          <Route path="/game/:id" exact component={GameView}/>
        </Switch>
    </Layout>
     
    );
};

export default Routes;