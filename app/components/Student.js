import React from 'react';
import {Link} from 'react-router';

//a component that displays a student info and also let the user edit the student and navigate to the student's campus
const findCampusName = (campusId, campuses) => {
    //debugger;
    let campus = campuses.filter((campus)=>{
        if(campus.id === campusId){
            return true;

        }
        else{
            return false;

        }

    });
    if(campus.length)
        return campus[0].name;
    else
        return '';

}



export default function Student (props) {
    const student = props.curStudent;
    const campuses = props.campuses;
    const handleUpdateSubmit = props.handleUpdateSubmit;
    let campusName = '';
    let studentName = '';
    let studentEmail = '';
    let studentCampusId;


    if((Object.keys(student).length > 0) && campuses.campuses){
        campusName = findCampusName(student.campusId,campuses.campuses);
        studentName = student.name;
        studentEmail = student.email;
        studentCampusId = student.campusId;


    }

    return (
        <div>
            <form  onSubmit={handleUpdateSubmit}>
                <label>Student Name:</label>
                <input type="text" name="firstname" value={studentName}></input>
                <label>Student Email</label>
                <input type="text" name="email" value={`${studentEmail}`}></input>
                <select name="campus" id="campusId">
                    {
                        campuses && campuses.campuses.map((campus)=> {
                            if (campus.id === studentCampusId)
                                return <option key={campus.id} selected="selected">{campus.id} {campus.name}</option>
                            else
                                return <option key={campus.id}>{campus.id} {campus.name}</option>
                        })


                    }
                </select>
                <button type="submit" className="btn btn-success">update Student</button>
                {
                    (Object.keys(student).length > 0) && <Link to={`/campuses/${student.campusId}`}>{campusName}</Link>

                }

            </form>
        </div>
    )

}



