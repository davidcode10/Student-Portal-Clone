import { Component } from 'react'
import { Link } from 'react-router-dom'
import Circle from './../Images/circle.png'
import CheckCircle from './../Images/blue-check-circle.jpg'
import NavBar from '../../layout/Navigation/Nav-Bar'
import CourseHeader from '../../layout/Header/CourseHeader'
import { Container, Row, Col, ListGroup, Image, Button } from 'react-bootstrap'
import LearnUnitsServices from './../../../services/learnunit.service'
import './Week1.css'

class Week1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            learnUnits: []
        }
        this.learnUnitServices = new LearnUnitsServices()
    }
    componentDidMount() {
        this.loadLearnUnits()
    }
    loadLearnUnits() {
        this.learnUnitServices
            .getAllLearnUnits()
            .then(response => this.setState({ learnUnits: response.data }))
            .catch(err => console.log('Error!', err))
    }
    // editOneLearnUnit() {
    //     const { id } = this.props.match.params
    //     // this.state.learnUnits.completed = !this.state.learnUnits.completed
    //     // this.learnUnitServices
    //     //     .editLearnUnit(id, this.state.learnUnits)
    //     //     .then(() => this.setState(this.state.learnUnits.completed, () => {
    //     //         this.loadLearnUnits()
    //     //     }))
    // }
    render() {
        const { learnUnits } = this.state
        return (
            <>
                <NavBar {...this.props} />
                <CourseHeader {...this.props} />
                <Container>
                    <Row>
                        <Col>Day 1</Col>
                        <Col>Day 2</Col>
                        <Col>Day 3</Col>
                        <Col>Day 4</Col>
                        <Col>Day 5</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            {learnUnits.slice(0, 5).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
                                {
                                    !this.props.loggedUser.completedUnits.includes(elm._id)
                                        ?
                                        <ListGroup className='divru'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='iamvsjv' src={Circle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        :
                                        <ListGroup className='opaocce'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='ocpafeoa' src={CheckCircle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                }
                            </Link>)
                            }
                        </Col>
                        <Col>
                            {learnUnits.slice(5, 11).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
                                {
                                    !this.props.loggedUser.completedUnits.includes(elm._id)
                                        ?
                                        <ListGroup className='divru'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='iamvsjv' src={Circle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        :
                                        <ListGroup className='opaocce'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='ocpafeoa' src={CheckCircle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                }
                            </Link>)
                            }
                        </Col>
                        <Col>
                            {learnUnits.slice(11, 16).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
                                {
                                    !this.props.loggedUser.completedUnits.includes(elm._id)
                                        ?
                                        <ListGroup className='divru'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='iamvsjv' src={Circle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        :
                                        <ListGroup className='opaocce'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='ocpafeoa' src={CheckCircle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                }
                            </Link>)
                            }
                        </Col>
                        <Col>
                            {learnUnits.slice(16, 26).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
                                {
                                    !this.props.loggedUser.completedUnits.includes(elm._id)
                                        ?
                                        <ListGroup className='divru'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='iamvsjv' src={Circle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        :
                                        <ListGroup className='opaocce'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='ocpafeoa' src={CheckCircle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                }
                            </Link>)
                            }
                        </Col>
                        <Col>
                            {learnUnits.slice(26, 32).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
                                {
                                    !this.props.loggedUser.completedUnits.includes(elm._id)
                                        ?
                                        <ListGroup className='divru'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='iamvsjv' src={Circle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                        :
                                        <ListGroup className='opaocce'>
                                            <ListGroup.Item action>
                                                <span>{elm.category}</span>
                                                <Image className='ocpafeoa' src={CheckCircle} />
                                                <div>{elm.title}</div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                }
                            </Link>)
                            }
                        </Col>
                    </Row >
                </Container>
            </>
        )
    }
}

export default Week1