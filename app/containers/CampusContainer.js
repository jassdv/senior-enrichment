import Campus from '../components/Campus';
import {connect} from 'react-redux'

//a container for a campus.
const mapStateToProps = (state) =>{
    /*
    state.campuses.campuses holds the array of campuses
    state.campuses.campus holds the selected campus
    state.students.students holds the array of students
    **********************************************
    building a list of students that go to the selected campus and send it to campus as its own props
      */
    return {
        campusStudentsArr: createCampusStudentArr(state.campuses.selectedCampus.id,state.students.students),    //an array of all the students that go to that cmpus
        campus: state.campuses.selectedCampus

    };
}
//createCampusStudentArr gets a campusId and array of all students
// and returns an array of all the students that go to this campus
const createCampusStudentArr = (campusId, studentsArr)=>{
    let campusStudentsArr = studentsArr.filter((student)=>{
        if(student.campusId === campusId){
            return true;

        }
        else
            return false;

    });
    return campusStudentsArr;

}

const CampusContainer = connect(mapStateToProps,null)(Campus)   //connecting the component campus to the state

export default CampusContainer;

