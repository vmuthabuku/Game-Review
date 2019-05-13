import React from 'react';
import {Switch, Route } from "react-router-dom"
import GameView from './components/Book';
import Home from "./components/Home/home"
import Layout from "./hoc/layout"
import Login from "./containers/Admin/login"
import Auth from './hoc/Auth/auth'
import User from './components/Admin'

const Routes = () => {
    return (
    <Layout>
        <Switch>
          <Route path="/" exact component={Auth(Home,null)}/>    
          <Route path="/login" exact component={Auth(Login,false)}/>
          <Route path="/game/:id" exact component={Auth(GameView, true)}/>
          <Route path="/user" exact component={Auth(User)}/>
        </Switch>
    </Layout>
     
    );
};

export default Routes;