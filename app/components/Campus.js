import React from 'react';
import {Link} from 'react-router';

//a component that displays specific campus
export default function Campus (props) {
    const campusStudentsArr = props.campusStudentsArr;  //all students that go to this campus
    const campus = props.campus;                        //this campus



    return (
        <div>
            <h1>{`${campus.name} Campus`}</h1>
            <div className=" ">
                {
                    campus ? (
                        <img className="single-campus-view" src={campus.image}/>
                        ) : null
                }

            </div>

            <div className="new-line">
                <h1>Students</h1>
                <ul>
                    {
                        campusStudentsArr && campusStudentsArr.map(student=> (
                            <li key={ student.id }><Link to={`/students/${student.id}`}>{student.name}</Link></li>
                        ))

                    }
                </ul>

            </div>

        </div>

    )
}
