import { Col, Container, Row } from 'react-bootstrap'
import NavBar from "../../layout/Navigation/Nav-Bar"
import LoginForm from "../Login/Login"
import SignUpForm from './../Signup/Signup'
import './Index-Page.css'


const IndexPage = ({ loggedUser, storeUser, history }) => {

    return (
        <>
            {
                <div className='body'>
                    <NavBar storeUser={storeUser} loggedUser={loggedUser} history={history} />
                    <Container>
                        <Row>
                            <Col>
                                <SignUpForm history={history} />
                            </Col>
                            <Col>
                                <LoginForm storeUser={storeUser} loggedUser={loggedUser} history={history} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            }
        </>
    )
}

export default IndexPage