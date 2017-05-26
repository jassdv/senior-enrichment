import {
    GET_STUDENTS,
    SET_CUR_USER
} from '../constants'

//students reducr
const initialState = {
    students: [],
    curStudent: {}

}

//pars all action options and updates the state
export default function (state = initialState, action){
    const newState = Object.assign({}, state);


    switch(action.type){
        case GET_STUDENTS:
            newState.students = action.students;
            break;
        case SET_CUR_USER:
            newState.curStudent = action.student;
            break;
        default:
            return state;

    }
    return newState;


}
