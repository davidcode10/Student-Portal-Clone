import axios from 'axios'

class LearnUnitService {
    constructor() {
        this.app = axios.create({
            baseURL: `http://localhost:5000/api/learnunit`,
            withCredentials: true
        })
    }
    getAllLearnUnits = () => this.app.get('/getAllLearnUnits')
    getOneLearnUnit = (_id) => this.app.get(`/selectLearnUnit/${_id}`)
    editLearnUnit = (learnunit_id, data) => this.app.put(`/editLearnUnit/${learnunit_id}`, data)
    addLearnUnit = (learnunit_id) => this.app.put(`/getLearnUnit/${learnunit_id}`)
    removeLearnUnit = (learnunit_id) => this.app.post(`/removeLearnUnit/${learnunit_id}`)

}

export default LearnUnitService