// import React from 'react';
// import axios from 'axios';

import Campuses from '../components/Campuses';
import {connect} from 'react-redux';

//a container to the campuses
const mapStateToProps = (state) =>{
    return {
        campuses: state.campuses
    }

}

const CampusesContainer = connect(
    mapStateToProps, null
)(Campuses);    //connecting the campuses to the state

export default CampusesContainer;




