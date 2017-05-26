import {
    GET_CAMPUSES,
    SET_SELECTED_CAMPUS
} from '../constants';


//campuses reducer
const initialAlbumsState = {
    campuses: [],
    selectedCampus: {}
};

//parsing all campus relates action options and sets the state accordingly
export default function (state = initialAlbumsState, action) {

    const newState = Object.assign({}, state);

    switch (action.type) {

        case GET_CAMPUSES:
            newState.campuses = action.campuses;
            break;
        case SET_SELECTED_CAMPUS:
                newState.selectedCampus = action.campus;
                break;




        default:
            return state;

    }

    return newState;

}
