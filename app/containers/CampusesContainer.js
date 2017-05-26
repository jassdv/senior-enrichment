// import React from 'react';
// import axios from 'axios';

import Campuses from '../components/Campuses';
import {connect} from 'react-redux';
import {deleteOneCampus} from '../action-creator/campuses'

//a container to the campuses
const mapStateToProps = (state) =>{
    return {
        campuses: state.campuses
    }

}



const mapDispatchToProp = (dispatch) => {

    return{
        deleteOneCampus: (campusId)=>{dispatch(deleteOneCampus(campusId));}
    }


}

const CampusesContainer = connect(
    mapStateToProps, mapDispatchToProp
)(Campuses);    //connecting the campuses to the state

export default CampusesContainer;




