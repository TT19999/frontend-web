import React from 'react'
import axios from 'axios'

class Home extends React.Component{
    constructor(props){
        super(props)
        this.state=({
            userData: [],
        })
    }
    render () {
        return(
            <h1>Hello</h1>
        )
    }
}
export default Home