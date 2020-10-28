import React from 'react'
import axios from 'axios'

export class Profile extends React.Component {
    constructor(){
        super ()
        this.state={
            userData: [],
        }
        this.onChange=this.onChange.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    async componentDidMount(){
        let userToken = localStorage.getItem('userToken')
        await axios.get('/api/getAuthUser', {
            headers: {'Authorization' : 'Bearer ' + userToken}
        }).then(res => {
            const userData=res.data.user
            this.setState({
                name : userData.name,
                email: userData.email,

            })
            console.log(userData)
        })
    }
    onChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    onSubmit(event){
        
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                Edit Profile
                            </h1>
                            <div className="form-group">
                                <label htmlFor='name'>name</label>
                                <input type="text"
                                className="form-control"
                                name='name'
                                placeholder="enter yourname"
                                value={this.state.name}
                                onChange={this.onChange}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>Email</label>
                                <input type="email"
                                className="form-control"
                                name='email'
                                placeholder="enter email"
                                value={this.state.email}
                                onChange={this.onChange}></input>
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block" >Edit</button>
                        </form>
                    </div>
                </div>

            </div>
        )
    }
}