import React, { Component } from 'react';
import { Layout,Menu } from "antd";

const { Header } = Layout;

class TheHeader extends Component {
    Logout(e){
        localStorage.removeItem('userToken')
        this.props.history.push('/home')
    }
    render() {
        const hasLogin =(
            <>
                <a href="/" onClick={e => this.Logout(e)} style = {{float:"right",marginLeft : 10}}>
                        log out
                </a>
                <a href="/profile"  style = {{float:"right"}}>
                        profile
                </a>
            </>
            
        )
        const noLogin = (
            <>
                    <a href="/Login" style = {{float:"right", marginLeft : 10, marginRight:200}}>
                        Login
                    </a>
                
                    <a href="/Register" style = {{float:"right"}} >
                        Register
                    </a>
            </>
                
        )
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor:"whitesmoke", height : 60}} >
                    <a href="/" style={{width : 100,height : 50, marginLeft: 200 }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSzvALVgu1_aJfdDZT2B-pRD2qlCb-WfnUUQ&usqp=CAU" 
                            width = "40" height="40" />
                    </a>
                    
                    {localStorage.userToken ? hasLogin : noLogin }
            </Header>
        );
    }
}

export default TheHeader;