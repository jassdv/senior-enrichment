import { GET_CAMPUSES, SET_SELECTED_CAMPUS} from '../constants';
import axios from 'axios';

//creates action 'get_campuses that sets the sate with all campuses'
export const receiveCampuses = campuses => (
    {
    type: GET_CAMPUSES,
    campuses
});

//creates action SET_SELECTED_CAMPUS to set the selected campus on the state
export const receiveCampus = campus => (
    {
        type: SET_SELECTED_CAMPUS,
        campus
    }
)

//gets a campus by its id from the server
export const getCampusById = (campudId) =>{
    return dispatch =>{
        axios.get(`/api/campuses/${campudId}`)
            .then (response =>{
                dispatch(receiveCampus(response.data));
            });

    };


}

export const deleteOneCampus = (campusId) => {
    return dispatch =>{
        axios.delete(`/api/campuses/${campusId}`)
            .then(responses=>{
                dispatch(receiveCampus(responses.data));
            });
    }
}

