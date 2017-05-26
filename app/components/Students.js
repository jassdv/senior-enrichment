import React, { Component } from 'react';
import {Link, browserHistory,hashHistory} from 'react-router';

//a component that displays all students
//redirecting to the add-student page
const addStudent = ()=>{
    hashHistory.push('/add-student');

}

export default function Students(props) {


    const studentsWithCampuses = props.studentsWithCampuses;     //an array of all sudents with their campus full info (including name etc)
    const campuses = props.campuses;                             //all campuses
    const deleteOneStudent = props.deleteOneStudent;             //a function to delete one student from the db when clicking 'x'
    const handleSubmit = props.handleNewStudentSubmit;           //a function to handle the submit button of "adding new user form"


    return(
        <div>
            <h1>Students</h1>
            <button className="add-student" onClick={() => addStudent()}>+ add a student</button>

            <div>
                {
                    props.children && React.cloneElement(props.children, Object.assign({}, props, {
                        campuses: campuses,
                        handleSubmit: handleSubmit
                    }))
                }
            </div>
            <div>
                <ul>
                    {
                        studentsWithCampuses && studentsWithCampuses.map((student) => (
                            <li key={ student.id }><Link to={`/students/${student.id}`}
                                                         className="student-link">{student.name}</Link>
                                <Link to={`/campuses/${student.campus[0].id}`}
                                      className="student-link">{student.campus[0].name}</Link>
                                <button className="del-student" onClick={() => deleteOneStudent(student.id)}>x
                                </button>
                            </li>

                        ))
                    }
                </ul>


            </div>
        </div>
    )
}





