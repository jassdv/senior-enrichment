'use strict'
import React from 'react';
import { Router, Route, hashHistory, IndexRedirect,browserHistory  } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import StudentsContainer from './containers/StudentsContainer';
import CampusesContainer from './containers/CampusesContainer';
import CampusContainer from './containers/CampusContainer';
import StudentContainer from './containers/StudentContainer';

import { receiveCampuses,getCampusById} from './action-creator/campuses';
import { receiveStudents,getUserById } from './action-creator/students';


import AddStudent from './components/addStudent'

import store from './store';
import Root from './components/Root';
import axios from 'axios';

//a function that gets all campuses and students from the db once the app is up
const onAppEnter = () => {
    var campusData;
    var studentData;

    const pCampuses =
        axios.get('/api/campuses')
        .then( (res) => {
            return campusData = res.data;
            console.log('campus data is now: ', campusData);
        });
    const pStudents = axios.get('/api/students')
        .then( (res) => {
            return studentData = res.data;
            console.log('student data is now: ', studentData);
        });


    return Promise
        .all([pCampuses, pStudents])
        .then(responses => {

            store.dispatch(receiveCampuses(responses[0]));
            store.dispatch(receiveStudents(responses[1]));

        });

};
//once we get to a single campus path , this function gets that campus from db
const onCampusEnter = function (nextRouterState){
    const campusId = nextRouterState.params.campusId;
    store.dispatch(getCampusById(campusId));


}

//once we get to a single student path, this function gets the student from the db
const onStudentEnter = function(nextRouterState){
    const studentId = nextRouterState.params.studentId;
    store.dispatch(getUserById(studentId));

}


ReactDOM.render (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' components={AppContainer} onEnter={onAppEnter}>
                <IndexRedirect to='/home' />
                <Route path="/home" components={CampusesContainer} />
                <Route path="/campuses/:campusId" component={CampusContainer} onEnter={onCampusEnter}/>
                <Route path="/students/:studentId" components={StudentContainer} onEnter={onStudentEnter}/>
                <Route path="/students" components={StudentsContainer}>
                    <Route path="/add-student" components={AddStudent}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('main')
)

