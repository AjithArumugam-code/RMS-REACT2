import axios from 'axios'

const COURSE_API_URL = 'http://localhost:8085'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}`

class CourseDataService {

    retrieveAllCourses() {
        return axios.get(`${INSTRUCTOR_API_URL}/get`);
    }
}

export default new CourseDataService()