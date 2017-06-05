import React from 'react';


//a form to add a student to the state
export default function AddStudent (props) {
    const handleSubmit = props.handleSubmit;        //a function to handle te submit button
    const campuses = props.campuses;                //all the campuses


    return(
        <div>
            <form  onSubmit={handleSubmit}>
                <label>Student Name:</label>
                <input type="text" name="firstname"></input>
                <label>Student Email</label>
                <input type="text" name="email"></input>
                <select name="campus" id="campusId">
                    {
                        campuses && campuses.map((campus)=>(
                            <option key={campus.id}>{campus.id} {campus.name}</option>
                        ))


                    }
                </select>
                <button type="submit" className="btn btn-success">Add Student</button>
            </form>
        </div>
    )


}


