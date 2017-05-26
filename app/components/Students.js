import React, { Component } from 'react';
import {Link, browserHistory,hashHistory} from 'react-router';

//a component that displays all students
export default class Students extends Component {
    constructor(props){
        super(props);
        this.studentsWithCampuses = props.studentsWithCampuses;     //an array of all sudents with their campus full info (including name etc)
        this.campuses = props.campuses;                             //all campuses
        this.deleteOneStudent = props.deleteOneStudent;             //a function to delete one student from the db when clicking 'x'
        this.handleSubmit = props.handleNewStudentSubmit;           //a function to handle the submit button of "adding new user form"

        this.addStudent = this.addStudent.bind(this);               //a function that redirect to the 'add stdent' form

    }

    //redirecting to the add-student page
    addStudent(){
        hashHistory.push('/add-student');

    }

    render(){
        return (
            <div>
                <h1>Students</h1>
                <button className="add-student" onClick={() => this.addStudent()}>+ add a student</button>

                <div>
                    {
                        this.props.children && React.cloneElement(this.props.children, Object.assign({}, this.props, {
                            campuses: this.campuses,
                            handleSubmit: this.handleSubmit
                        }))
                    }
                </div>
                <div>
                    <ul>
                        {
                            this.studentsWithCampuses && this.studentsWithCampuses.map((student)=>(
                                <li key={ student.id }><Link to={`/students/${student.id}`} className="student-link">{student.name}</Link>
                                    <Link to={`/campuses/${student.campus[0].id}`} className="student-link">{student.campus[0].name}</Link>
                                    <button className="del-student" onClick={() => this.deleteOneStudent(student.id)}>x</button></li>

                            ))
                        }
                    </ul>


                </div>
            </div>
        )

    }

}

