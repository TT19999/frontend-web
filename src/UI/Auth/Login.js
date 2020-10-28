import axios from 'axios'
import React from 'react'

    
export class Login extends React.Component {
    constructor(){
        super()
        this.state={
            email: '',
            password:'',
            errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit =this.onSubmit.bind(this)
    }
    onChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSubmit(event){
        event.preventDefault()
        const user={
            email : this.state.email,
            password: this.state.password
        }
        axios.post('/api/login', user , {
            headers: {'Content-Type' : 'application/json'}
        }).then(res => {
            localStorage.setItem('userToken',res.data.token)
            this.props.history.push('/home')
            console.log(res)
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
                            <button type="submit" className="btn btn-lg btn-primary btn-block" >sign in</button>
                        </form>
                    </div>
                </div>

            </div>
            
        )
        

    }
}