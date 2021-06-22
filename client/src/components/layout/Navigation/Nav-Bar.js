import { Navbar, Nav, NavDropdown, Image, Container } from 'react-bootstrap'
import AuthService from './../../../services/auth.service'
import Logo from './../Images/ironhack-logo.png'
import './Nav-Bar.css'

const Header = ({ loggedUser, storeUser }) => {
    const logout = () => {
        const authService = new AuthService()
        authService
            .logout()
            .then(() => storeUser(undefined))
            .catch(err => console.log('error!!!', err))
    }

    return (
        <>
            <Navbar bg="white" expand="lg">
                <Container>
                    <div className='div'>
                        <Nav className='brand'>
                            <Navbar.Brand href='/'><Image src={Logo} className='logo' rounded /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            {
                                !loggedUser ?
                                    <>
                                    </>
                                    :
                                    <Nav.Link href='/week1'>Course</Nav.Link>
                            }
                        </Nav>
                    </div>
                    {!loggedUser ?
                        <>
                        </>
                        :
                        <Nav className="mr-auto logout">
                            <NavDropdown title={loggedUser.email} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => logout()} href="/">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    }
                </Container>
            </Navbar>
            <hr />
        </>
    )
}

export default Header