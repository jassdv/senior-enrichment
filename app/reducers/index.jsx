import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';
import studentsReducer from './studentReducer'



//compines the students and campuses reducers
export default combineReducers({
    campuses: campusesReducer,
    students: studentsReducer
});


// const initialState = {}
//
// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };
//
// export default rootReducer
