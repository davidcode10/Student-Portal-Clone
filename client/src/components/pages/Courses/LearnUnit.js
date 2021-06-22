import { Component } from "react"
import { Button, Container, Form, Image, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import LearnUnitService from "../../../services/learnunit.service"
import AssessmentService from "../../../services/assessment.service"
import CheckCircle from './../Images/check-circle.jpg'
import LeftArrow from './../Images/left-arrow.jpg'
import RightArrow from './../Images/right-arrow.jpg'
import './LearnUnit.css'

class LearnUnit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            learnUnit: [],
            assessment: {
                link: '',
                student: this.props.loggedUser
            },
        }
        this.learnUnitServices = new LearnUnitService()
        this.assessmentService = new AssessmentService()
    }
    componentDidMount() {
        this.loadOneLearnUnit()
    }
    loadOneLearnUnit() {
        const { id } = this.props.match.params
        this.learnUnitServices
            .getOneLearnUnit(id)
            .then(response => this.setState({ learnUnit: response.data }))
            .catch(err => console.log('Error!', err))
    }
    // addLearnUnit() {
    //     const { id } = this.props.match.params
    //     // this.state.learnUnit.completed = !this.state.learnUnit.completed
    //     // this.learnUnitServices
    //     //     .editLearnUnit(id, this.state.learnUnit)
    //     //     .then(() => this.loadOneLearnUnit())
    //     //     .catch(err => console.log(err))
    //     this.props.loggedUser.completedUnits.push(id)
    // }
    // removeLearnUnit() {
    //     const { id } = this.props.match.params
    //     this.props.loggedUser.completedUnits.pull(id)
    // }
    completedLearnUnit() {
        const { id } = this.props.match.params
        if (!this.props.loggedUser.completedUnits.includes(id)) {
            this.learnUnitServices
                .addLearnUnit({ id }, this.props.loggedUser.completedUnits.push(id))
                .then(() => this.loadOneLearnUnit())
                .catch(err => console.log(err))
        }
    }
    uncompleted() {
        const { id } = this.props.match.params
        this.learnUnitServices
            .removeLearnUnit({ id }, this.props.loggedUser.completedUnits.splice(id))
            .then(() => this.loadOneLearnUnit())
            .catch(err => console.log(err))

    }
    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ assessment: { ...this.state.assessment, [name]: value } })
    }
    handleSubmit(e) {
        e.preventDefault()
        this.assessmentService
            .createAssessment(this.state.assessment)
            .then(() => this.completedLearnUnit())
            .catch(err => console.log(err))
    }
    refreshPage() {
        setTimeout(() => window.location.reload(), 200)
    }
    render() {
        return (
            <>
                <Container>
                    {
                        this.state.learnUnit.category === 'LESSON' && 'SELF GUIDED'
                            ?
                            <>
                                <Navbar className='xtdcsa'>
                                    <Link to='/week1' className='kpviu'>
                                        <Button className='ixicns'>
                                            <span>
                                                <Image className='img' src={LeftArrow} />
                                            </span>
                                            Go back
                                        </Button>
                                    </Link>
                                </Navbar>
                                <h1 className='h1'>{this.state.learnUnit.title}</h1>
                                <h4>{this.state.learnUnit.category}</h4>
                                <div dangerouslySetInnerHTML={{ __html: this.state.learnUnit.content }} />
                                <div className='sadvs'>
                                    {
                                        !this.props.loggedUser?.completedUnits.includes(this.state.learnUnit._id)
                                            ?
                                            <Form>
                                                <Button onClick={() => this.completedLearnUnit()} className='nves'>
                                                    <span>Mark as completed</span>
                                                </Button>
                                            </Form>
                                            :
                                            <>
                                                <div className='jux'>
                                                    <Image src={CheckCircle} />
                                                </div>
                                                <h1 className='yuki'>Lesson Completed</h1>
                                                <Form>
                                                    <Button onClick={() => this.uncompleted()} className='koecae'>Mark as not completed</Button>
                                                </Form>
                                            </>
                                    }
                                </div>
                            </>
                            :
                            <div>
                                <Navbar className='xtdcsa'>
                                    <Link to='/week1' className='kpviu'>
                                        <Button className='ixicns'>
                                            <span>
                                                <Image className='img' src={LeftArrow} />
                                            </span>
                                            Go back
                                        </Button>
                                    </Link>
                                </Navbar>
                                <h1 className='h1'>{this.state.learnUnit.title}</h1>
                                <h4>{this.state.learnUnit.category}</h4>
                                <div dangerouslySetInnerHTML={{ __html: this.state.learnUnit.content }} />
                                <div className='fusdc'>
                                    <div className='jocjin'>
                                        {
                                            !this.props.loggedUser?.completedUnits.includes(this.state.learnUnit._id)
                                                ?
                                                <>
                                                    <h1 className='aoix'>Submit your result</h1>
                                                    <p className='jors'>Please paste here the Pull Request URL for our team to check your code:</p>
                                                    <Form onSubmit={e => this.handleSubmit(e)}>
                                                        <Form.Group className='svack' controlId="link">
                                                            <Form.Label for='url' className='lavel'>URL</Form.Label>
                                                            <Form.Control className='url' type='url' placeholder='URL of your assignment' name='link' value={this.state.assessment.link} onChange={e => this.handleInputChange(e)} />
                                                        </Form.Group>
                                                        <Button type='submit' className='ufrsif'>
                                                            <span>Send lab</span>
                                                        </Button>
                                                    </Form>
                                                </>
                                                :
                                                <Form>
                                                    <div>
                                                        <Image src={CheckCircle} />
                                                        <h1 className='aoix'>All your challenges are on their way</h1>
                                                        <p className='jors'>Thanks for uploading your work!</p>
                                                        <Button onClick={() => this.uncompleted()} className='faydec'>Edit lab</Button>
                                                    </div>
                                                </Form>
                                        }
                                    </div>
                                </div>
                            </div>
                    }
                </Container>
                <Navbar className='navbaer'>
                    <Link to={`/learnunit/${this.state.learnUnit.previousUnit}`} className='linkdue' onClick={() => this.refreshPage()}>
                        <Form.Label for='url' className='ergna'>Previous</Form.Label>
                        <div className='ciebe'>
                            <span><Image className='img' src={LeftArrow} /></span>
                            <div>Previous lesson</div>
                        </div>
                    </Link>
                    <Link to={`/learnunit/${this.state.learnUnit.nextUnit}`} className='linkdues' onClick={() => this.refreshPage()}>
                        <Form.Label for='url' className='ergna'>Next</Form.Label>
                        <div className='ciebes'>
                            <div>Next lesson</div>
                            <span><Image className='img' src={RightArrow} /></span>
                        </div>
                    </Link>
                </Navbar>
            </>
        )
    }
}

export default LearnUnit