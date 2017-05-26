import React, { Component } from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import Navbar from '../components/Navbar'
import initialState from '../initialState'
import store from '../store'

//a container to the app, shows the navbar
export default class AppContainer extends Component {
    constructor (props){
        super(props);
        this.state = initialState;
    }

    render(){
        return(
        <div id="main" className="container-fluid">
            <div >
                <Navbar  />
            </div>
            <div>
                {
                    this.props.children
                }
            </div>

        </div>





        )

    }



}

