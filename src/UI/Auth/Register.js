import React from 'react'
import axios from 'axios'

export class Register extends React.Component {
    constructor() {
        super()
        this.state={
            name: '',
            email: '',
            passwor: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }
    onChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    async onSubmit(event){
        event.preventDefault()
        const user={
            name : this.state.name,
            email : this.state.email,
            password: this.state.password
        }
        await axios.post('/api/register', user,{
            headers: {'Content-Type' : 'application/json'}
        }).then(res =>{
            if(res){
                localStorage.setItem('userToken',res.data.token)
                this.props.history.push('/home')
            }
        })
        
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">
                                please sign in
                            </h1>
                            <div className="form-group">
                                <label htmlFor='name'>Your name</label>
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
                            <div className="form-group">
                                <label htmlFor='password'>password</label>
                                <input type="password"
                                className="form-control"
                                name='password'
                                placeholder="enter password"
                                value={this.state.password}
                                onChange={this.onChange}></input>
                                
                            </div>
                            <button type="submit" className="btn btn-lg btn-primary btn-block" >Regiter</button>
                        </form>
                    </div>
                </div>
            </div>
            
        )
        

    }
}