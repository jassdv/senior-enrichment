import React from 'react';
import {Link} from 'react-router';

//a component that displays all campuses
export default function Campuses (props) {

    const campuses = props.campuses;    //all the campuses
    const deleteOneCampus = props.deleteOneCampus;

    return (
        <div>
            <h3>Campuses</h3>
            <div className="row">
                {
                    campuses && campuses.campuses.map(campus => (
                        <div className="col-xs-4" key={ campus.id }>
                            <button className="del-campus" onClick={() => deleteOneCampus(campus.id)}>delete campus x
                            </button>
                            <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                                <img className="campuses-view" src={ campus.image }/>
                                <div className="caption">
                                    <h5>
                                        <span>{ campus.name }</span>
                                    </h5>
                                </div>
                            </Link>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

//onClick={() => deleteOneStudent(student.id)}