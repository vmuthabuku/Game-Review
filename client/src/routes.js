import React from 'react';
import {Switch, Route } from "react-router-dom"
import GameView from './components/Book';
import Home from "./components/Home/home"
import Layout from "./hoc/layout"
import Login from "./containers/Admin/login"
import Auth from './hoc/Auth/auth'
import User from './components/Admin'
import AddReview from './containers/Admin/add'
import AllPost from './components/Admin/user_post'

const Routes = () => {
    return (
    <Layout>
        <Switch>
          <Route path="/" exact component={Auth(Home,null)}/>    
          <Route path="/login" exact component={Auth(Login,false)}/>
          <Route path="/game/:id" exact component={Auth(GameView, true)}/>
          <Route path="/user" exact component={Auth(User)}/>
          <Route path="/user/addreview" exact component={Auth(AddReview, true)}/>
          <Route path="/user/allpost" exact component={Auth(AllPost, true)}/>
        </Switch>
    </Layout>
     
    );
};

export default Routes;