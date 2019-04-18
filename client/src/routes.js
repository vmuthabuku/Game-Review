import React from 'react';
import {Switch, Route } from "react-router-dom"
import GameView from './components/Book';
import Home from "./components/Home/home"
import Layout from "./hoc/layout"

const Routes = () => {
    return (
    <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/game/:id" exact component={GameView}/>
        </Switch>
    </Layout>
     
    );
};

export default Routes;