import NavBar from '../../layout/Navigation/Nav-Bar'
import { Link } from 'react-router-dom'
import Circle from './../Images/circle.png'
import CheckCircle from './../Images/blue-check-circle.jpg'
import CourseHeader from '../../layout/Header/CourseHeader'
import { Container, Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
import LearnUnitsServices from './../../../services/learnunit.service'
import './Week2.css'
import { Component } from 'react'

class Week2 extends Component {
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
    //     this.state.learnUnits.completed = !this.state.learnUnits.completed
    //     this.learnUnitServices
    //         .editLearnUnit(id, this.state.learnUnits)
    //         .then(() => this.setState(this.state.learnUnits.completed, () => {
    //             this.loadLearnUnits()
    //         }))
    //         .catch(err => console.log(err))
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
                            {learnUnits.slice(32, 38).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
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
                        </Col >
                        <Col>
                            {learnUnits.slice(38, 44).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
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
                            {learnUnits.slice(44, 50).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
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
                            {learnUnits.slice(50, 56).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
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
                            {learnUnits.slice(56, 58).map(elm => <Link className='linkul' to={`learnunit/${elm._id}`} key={elm._id} {...elm}>
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
                    </Row>
                </Container>
            </>
        )
    }
}

export default Week2