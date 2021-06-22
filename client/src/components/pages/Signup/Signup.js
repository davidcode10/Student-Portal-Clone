import { Component } from "react"
import { Form, Button, Image } from 'react-bootstrap'
import AuthService from './../../../services/auth.service'
import Logo from './../../layout/Images/ironhack-logo.png'
import './Signup.css'

class SignupForm extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange(e) {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.authService
            .signup(this.state)
            .then(() => {
                this.props.history.push('/')
            })
            .catch(err => console.log('error!', err))
    }

    render() {

        return (

            <Form className='box' onSubmit={e => this.handleSubmit(e)}>
                <div className='logs'>
                    <Image className='sijsi' src={Logo} />
                </div>
                <div>
                    <h1 className='forftiel'>Sign Up</h1>
                    <Form.Group controlId="email">
                        <Form.Label className='label'>Email:</Form.Label>
                        <Form.Control className='input' type="email" placeholder="Enter username" value={this.state.email} onChange={e => this.handleInputChange(e)} name='email' />
                    </Form.Group>
                    <Form.Group controlId="username">
                        <Form.Label className='label'>Username</Form.Label>
                        <Form.Control className='input' type="text" placeholder="Enter username" value={this.state.username} onChange={e => this.handleInputChange(e)} name='username' />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className='label'>Password</Form.Label>
                        <Form.Control className='input' type="password" placeholder="Password" value={this.state.password} onChange={e => this.handleInputChange(e)} name='password' />
                    </Form.Group>
                    <Form.Group>
                        <Button className='submiy' variant="primary" type="submit">
                            Sign Up
                    </Button>
                    </Form.Group>
                </div>
            </Form>

        )
    }
}

export default SignupForm