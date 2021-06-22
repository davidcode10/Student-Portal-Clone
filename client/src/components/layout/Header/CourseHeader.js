import { Container, Navbar, Nav, NavDropdown, Button, Image } from "react-bootstrap"
import arrowRight from './../Images/arrow-right.png'
import arrowLeft from './../Images/arrow-left.png'
import { Link } from "react-router-dom"
import './CourseHeader.css'

const CourseHeader = ({ loggedUser, location }) => {
    return (
        <Container>
            <Navbar className='header'>
                <div className='div'>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto logout">
                            <NavDropdown title='Week' id="basic-nav-dropdown">
                                <NavDropdown.Item href='/week1'>Week 1</NavDropdown.Item>
                                <NavDropdown.Item href='/week2'>Week 2</NavDropdown.Item>
                                <NavDropdown.Item href='/week3'>Week 3</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div>
                    <Nav>
                        {
                            location.pathname === '/week1'
                                ?
                                <>
                                    <Link className='orfer' to='/week2'>
                                        <Button variant='white'>Next Week</Button><Image className='imaf' src={arrowRight} />
                                    </Link>
                                </>
                                :
                                location.pathname === '/week2'
                                    ?
                                    <>
                                        <Link className='orfer' to='/week1'>
                                            <Image className='imaf' src={arrowLeft} /><Button variant='white'>Previous Week</Button>
                                        </Link>
                                        <Link className='orfer' to='/week3'>
                                            <Button variant='white'>Next Week</Button><Image className='imaf' src={arrowRight} />
                                        </Link>
                                    </>
                                    :
                                    location.pathname === '/week3'
                                        ?
                                        <>
                                            <Link className='orfer' to='/week2'>
                                                <Image className='imaf' src={arrowLeft} /><Button variant='white'>Previous Week</Button>
                                            </Link>
                                        </>
                                        :
                                        <>
                                        </>
                        }
                        {loggedUser?.role === 'ADMIN'
                            ?
                            <>
                                <Link to='/admin'>
                                    <Button variant="white">Edit in Studio</Button>{' '}
                                </Link>
                            </>
                            :
                            <>
                            </>
                        }
                    </Nav>
                </div>
            </Navbar>
        </Container>
    )
}

export default CourseHeader