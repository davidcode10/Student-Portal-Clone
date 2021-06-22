import axios from 'axios'

class AssessmentService {
    constructor() {
        this.app = axios.create({
            baseURL: `http://localhost:5000/api/assessment`,
            withCredentials: true
        })
    }
    createAssessment = assessmentDetails => this.app.post('/newAssessment', assessmentDetails)
    getAssessments = () => this.app.get('/getAllAssessments')
}

export default AssessmentService