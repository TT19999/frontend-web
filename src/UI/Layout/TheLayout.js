import React, { Component } from "react";
import { Layout } from "antd";
import {TheContent, TheFooter, TheHeader } from "./index";


const { Content } = Layout;

class TheLayout extends Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <TheHeader />
        
        <Layout className="site-layout">
          
          <TheContent />
        </Layout>
        <TheFooter />
      </Layout>
    );
  }
}

export default TheLayout;
