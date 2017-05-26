import { GET_STUDENTS, SET_CUR_USER } from '../constants';
import axios from 'axios';

//creates action GET_STUDENTS set all the students on the state
export const receiveStudents = students => ({
    type: GET_STUDENTS,
    students
});

//creates action SET_CUR_USER that sets the current student on the state
export const selectStudent = student => ({
        type: SET_CUR_USER,
        student
    }

);

//deletes a student from the db
export const deleteStudent = (studentId) => {
    return (dispatch, getState) => {
        return axios.delete(`/api/students/${studentId}`)
            .then(response => {
            dispatch(receiveStudents(response.data));
        })

    }

}

//updates a student on the db
export const updateStudent = (studentId,name, email,campusId) =>{
    return(dispatch,getState) => {
        return axios.put(`/api/students/${studentId}`,{name:name,email:email,campusId:campusId})
            .then(response => {
                dispatch(selectStudent(response.data));
            })
    }

}

//adds a new student to the db
export const addStudent = (name, email,campusId)=>{

    return(dispatch,getState) =>{

        return axios.post('/api/students',{name:name,email:email,campusId:campusId})
            .then(student => {

                dispatch(selectStudent(student.data));
                hashHistory.push(`students/${student.id}`);
            }).catch(()=>{

            });

    }

}

//gets a student bu its id from the db
export const getUserById = (studentId) =>{
    return dispatch =>{
        axios.get(`/api/students/${studentId}`)
            .then (response =>{

                dispatch(selectStudent(response.data));
            });

    };


}