import NavBar from '../../layout/Navigation/Nav-Bar'
import { Link } from 'react-router-dom'
import Circle from './../Images/circle.png'
import CheckCircle from './../Images/blue-check-circle.jpg'
import CourseHeader from '../../layout/Header/CourseHeader'
import { Container, Row, Col, ListGroup, Button, Image } from 'react-bootstrap'
import LearnUnitsServices from './../../../services/learnunit.service'
import './Week3.css'
import { Component } from 'react'

class Week3 extends Component {
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
    //     const refreshLearnUnits = this.loadLearnUnits()
    //     this.learnUnitServices
    //         .editLearnUnit(this.state.learnUnits._id, { completed: true })
    //         .then(() => refreshLearnUnits())
    //         .catch(err => console.log(err))
    // }
    render() {
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
                            <ListGroup defaultActiveKey="#link1">
                                <ListGroup.Item action>
                                    <span>Category</span>
                                    <div className='sc'>src</div>
                                    <div>Title</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col >
                        <Col>
                            <ListGroup defaultActiveKey="#link1">
                                <ListGroup.Item action>
                                    <span>Category</span>
                                    <div className='sc'>src</div>
                                    <div>Title</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup defaultActiveKey="#link1">
                                <ListGroup.Item action>
                                    <span>Category</span>
                                    <div className='sc'>src</div>
                                    <div>Title</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup defaultActiveKey="#link1">
                                <ListGroup.Item action>
                                    <span>Category</span>
                                    <div className='sc'>src</div>
                                    <div>Title</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col>
                            <ListGroup defaultActiveKey="#link1">
                                <ListGroup.Item action>
                                    <span>Category</span>
                                    <div className='sc'>src</div>
                                    <div>Title</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Week3