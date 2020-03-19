import React from 'react';
import Service from './Service'

class ListUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: []
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        Service.retrieveAllCourses()
            .then(
                response => {
                    console.log(response);
                    this.setState({ courses: response.data })
                }
            )
    }
    render() {
        return (
            <div >
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>name</th>
                            <th>message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.courses.map(
                                course =>
                                    <tr >
                                        <td>{course.id}</td>
                                        <td>{course.name}</td>
                                        <td>{course.message}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}



export default ListUser;