import { Component } from "react"
import { Link } from "react-router-dom"
import LeftArrow from './../Images/left-arrow.jpg'
import { Container, ListGroup, Navbar, Button, Image } from "react-bootstrap"
import AssessmentService from './../../../services/assessment.service'

class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            assessments: []
        }
        this.assessmentService = new AssessmentService()
    }
    componentDidMount() {
        this.loadAssessments()
    }
    loadAssessments() {
        this.assessmentService
            .getAssessments()
            .then(response => {
                console.log(response.data)
                this.setState({ assessments: response.data })
            })
            .catch(err => console.log('Error!', err))
    }
    render() {
        return (
            <Container>
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
                <h1 className='h1'>Assessments</h1>
                {this.state.assessments.map(elm => <ListGroup key={elm._id}>
                    <ListGroup.Item>
                        <a target="_blank" href={elm.link}>{elm.link}</a><p>Student: {elm.student.username}</p>
                    </ListGroup.Item>
                </ListGroup>)}
            </Container>
        )
    }
}

export default Admin