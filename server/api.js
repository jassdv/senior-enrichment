'use strict'
const api = require('express').Router()
const db = require('../db')
const Campus = require('../db/models').Campus;
const Student = require('../db/models').Student;
// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

//gets all campuses from db
api.get('/campuses', (req,res,next)=>{
    Campus.findAll()
        .then((campuses)=>{
            res.status(200).send(campuses);

        }).catch(next);

});

//gets all students from db
api.get('/students',(req,res,next)=>{
    Student.findAll()
        .then((students)=>{
        res.status(200).send(students);

        }).catch(next);

});

//gets a single campus by its id from the db
api.get('/campuses/:campusId',(req,res,next)=>{
    var campusId;

    //checks if the campus id is invalid
    if(parseInt(req.params.campusId)){
        campusId = req.params.campusId;

    }
    else{
        next(500);
    }
    Campus.findOne({    //finds tha campus by the id
        where: {
            id: campusId
        }
    }).then((campus)=>{
        res.status(200);
        res.send(campus.dataValues);    //returning the specific campus
    }).catch(()=>{      //if cant find the campus returns 404

        next(404);
    });

});

//gets a single student be his id
api.get('/students/:studentId',(req,res,next)=>{

    var studentId;

    //checks if the id is valid
    if(parseInt(req.params.studentId)){
        studentId = req.params.studentId;

    }
    else{
        next(500);
    }
    Student.findOne({
        where: {
            id: studentId
        }
    }).then((student)=>{
        res.status(200);
        res.send(student.dataValues);
    }).catch(()=>{

        next(404);
    });

});

//add a new campus to the db
api.post('/campuses',(req,res,next)=>{

    Campus.findOrCreate({
        where: {
            name: req.body.name,
            image: req.body.image
        }
    }).then((campus)=>{
        res.status(201);
        res.send(campus[0].dataValues);

    }).catch(next);

});

//add a new student to the db
api.post('/students',(req,res,next)=>{
    Student.findOrCreate({
        where: {
            name: req.body.name,
            email: req.body.email,
            campusId: req.body.campusId
        }
    }).then((student)=>{
        res.status(201);

        res.send(student[0]);

    }).catch(next);

});

//updates a single student on the db
api.put('/students/:studentId',(req,res,next)=>{
    let studentId;


    if(parseInt(req.params.studentId)){
        studentId = req.params.studentId;

    }
    else{
        next(500);

    }
    Student.update(
        { name: req.body.name, email: req.body.email, campusId: req.body.campusId},
        {where: {id: studentId}}
    ).spread((affectedStudents,update)=>{
        return Student.findById(studentId);
    }).then((student)=>{
        res.status(200);
        res.send(student.dataValues);


    }).catch(()=>{
        next(404);
    });


});

//updates a single campus on the db
api.put('/campuses/:campusId',(req,res,next)=>{
    let campusId;
    if(parseInt(req.params.campusId)){
        campusId = req.params.campusId;

    }
    else{
        next(500);

    }
    Campus.update(
        {name: req.body.name,image: req.body.image},
        {where: {id: campusId}})
        .spread((affectedCamuses,update)=>{
            return Campus.findById({
                where: {
                    id: campusId
                }
            })

    }).then((campus)=>{
        res.status(201).send(campus.dataValues);
    }).catch(()=>{
        next(404);
    });

});

//deletes a single campus from the db
api.delete('/campuses/:campusId',(req,res,next)=>{
    let campusId;
    if(parseInt(req.params.campusId)){
        campusId = req.params.campusId;

    }
    else{
        next(500);

    }
    Campus.destroy({
        where: {
            id: campusId
        }
    }).then((affectedRows)=>{
        if(affectedRows === 0){
            next(404);

        }
        else{
            res.sendStatus(204);

        }

    }).catch(()=>{
        next(404);
        }
    );

});

//deleted a single student from the array
api.delete('/students/:studentId',(req,res,next)=>{
    let studentId;
    if(parseInt(req.params.studentId)){
        studentId = req.params.studentId;

    }
    else{
        next(500);

    }
    Student.destroy({
        where: {
            id: studentId
        }
    }).then((affectedRows)=>{
        if(affectedRows === 0){ //no row was deleted
            next(404);

        }
        else{
            return Student.findAll();


        }

    }).then((students)=>{
        res.status(200).send(students);


    }).catch(()=>{
        next(404);
    });
});





module.exports = api