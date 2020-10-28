import React, { Component } from "react";
import {Layout } from 'antd'
import axios from "axios";
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import Home from "../Component/Home";
import { Login } from "../Auth/Login";
import { Register } from "../Auth/Register";
import { Profile } from "../Auth/Profile";


const {Content} = Layout

class TheContent extends Component {
  render() {
    return (
      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380,margin: '16px 0' }}>
            <Switch>
              <Route exact path = '/' component={Home} />
              <Route exact path = '/home' component={Home} />
              <Route exact path ='/login' component={Login} />
              <Route exact path = '/register' component={Register} />
              <Route exact path ='/profile' component={Profile} />
            </Switch>
        </div>
    </Content>
    );
  }
}

export default TheContent;
