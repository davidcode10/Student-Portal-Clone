import { Component } from "react"
import { Form, Button, Image } from 'react-bootstrap'
import AuthService from './../../../services/auth.service'
import Logo from './../../layout/Images/ironhack-logo.png'

class LoginForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.authService = new AuthService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.authService
            .login(this.state)
            .then(response => this.props.storeUser(response.data))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Form className='box' onSubmit={e => this.handleSubmit(e)}>
                <div className='logs'>
                    <Image className='sijsi' src={Logo} />
                </div>
                <div>
                    <h1 className='forftiel'>Login</h1>
                    <Form.Group controlId="username">
                        <Form.Label className='label'>Username:</Form.Label>
                        <Form.Control className='input' type="text" placeholder="Enter username" value={this.state.username} onChange={e => this.handleInputChange(e)} name='username' />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label className='label'>Password:</Form.Label>
                        <Form.Control className='input' type="password" placeholder="Password" value={this.state.password} onChange={e => this.handleInputChange(e)} name='password' />
                    </Form.Group>
                    <Form.Group>
                        <Button className='submiy' variant="primary" type="submit">
                            Login
                        </Button>
                    </Form.Group>
                </div>
            </Form>
        )
    }
}

export default LoginForm