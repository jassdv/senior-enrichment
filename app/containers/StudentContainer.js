import Student from '../components/Student';
import {connect} from 'react-redux';
import {updateStudent} from '../action-creator/students'



//a single student container
const mapStateToProps = (state) =>{
    return {
        curStudent: state.students.curStudent,
        campuses: state.campuses
    }

}

const mapDispatchToProp = (dispatch,ownProps) => {
    return{
        handleUpdateSubmit: (evt)=>{
            dispatch(updateStudent(ownProps.params.studentId,evt.target.firstname.value,evt.target.email.value,evt.target.campusId.value[0]));}

    }


}

const StudentContainer = connect(
    mapStateToProps, mapDispatchToProp
)(Student); //connecting  a single student to the state

export default StudentContainer;