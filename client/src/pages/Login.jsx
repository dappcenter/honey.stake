import React, { Component } from "react"
import axios from "axios"


class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log("handle change", event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        console.log('form submitted')
        event.preventDefault();
        axios.post('/api/login', {
                email: this.state.email,
                password: this.state.password
        }).then(response => {
            console.log(response)
            if (response.data) {
                console.log('login success')
                // window.location.replace("http://localhost:3000/crypto")
            } else {
                console.log('sign in error')
                return;
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div onSubmit={this.handleSubmit} className="container column col-4 col-xs-12"
                style={{
                    paddingTop: "100px"
                }}>
                <form className="form-group">
                    <label className="form-label" for="input-example-1">Email</label>
                    <input className="form-input" type="email" name="email" value={this.state.email} id="input-example-1" onChange={this.handleChange} placeholder="Email" required />
                    <label className="form-label" for="input-example-1">Password</label>
                    <input className="form-input" type="password" name="password" value={this.state.password} id="input-example-1" onChange={this.handleChange} placeholder="Password" required />
                    <button
                        type="submit"
                        style={{
                            marginTop: "10px"
                        }}
                    >Sign In</button>
                </form>
            </div>
        );
    }
}
export default SignUp