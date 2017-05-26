import React from 'react';
import {connect} from 'react-redux'
import Students from '../components/Students'
import {deleteStudent,addStudent} from '../action-creator/students'

//a containet for all students component
const mapStateToProp = (state, ownProp)=>{
    return {
        studentsWithCampuses: addCampusnameToStudents(state.students.students,state.campuses.campuses), //an array of all students with an additional property of their campus
        campuses: state.campuses.campuses,

    }


};

const mapDispatchToProp = (dispatch) => {

    return{
        deleteOneStudent: (studentId)=>{dispatch(deleteStudent(studentId));},
        handleNewStudentSubmit: (evt)=>{

            dispatch(addStudent(evt.target.firstname.value,evt.target.email.value,evt.target.campusId.value[0]));}

    }


}




//a function that gets a campus id and an array of all campuses
//and returns the campus opject that has this id
const findMyCampus= (campusId,campuses) => {
    return campuses.filter((campus)=>{
        if(campus.id === campusId ){
            return true;

        }
        else{
            return false;
        }

    });

}

//a function that takes: studnts array and campuses array
//return an array of all students with an additional propery of campus to each one of them
//that would give us the ability to get more information about a campus through a user (rather than just the campus id)
const addCampusnameToStudents = (students, campuses)=>{
 //returning an array of sudents with a property campus
    let arr=[];
    if(students){
        arr = students.map((student)=>{
            student['campus'] = findMyCampus(student.campusId,campuses);
            return student;

        });

    }
    return arr;

}

const StudentsContainer = connect(mapStateToProp,mapDispatchToProp)(Students);

export default StudentsContainer;


