const Promise = require('bluebird');
const db = require('./db/index');
const Campus = require('./db/models/index').Campus;
const Student = require('./db/models/index').Student;

const data = {
    Campus: [
        {name: "Mercury", image: "./images/mercury.jpg" },
        {name: "Venus", image: "./images/venus.jpg"},
        {name: "Mars", image: "./images/mars.jpg"},
        {name: "Jupiter", image: "./images/jupiter"}
        ]
    ,
    Student: [
        {name: "Jasmine Zangi", email: "jasmine@gmail.com", campus:{name: "Mercury"}},
        {name: "Ben Levi", email: "benL@lol.com", campus: {name: "Mercury"}},
        {name: "Kobi Zarmon", email: "kz@hotmail.com", campus: {name: "Venus"}},
        {name: "Mira Jones", email: "mira_j@gmail.com", campus: {name: "Venus"}},
        {name: "Timothy gordon", email: "gordont@gmail.com", campus: {name: "Mars"}},
        {name: "Gil Atari", email: "gili@yahoo.com", campus: {name: "Mars"}},
        {name: "Shelli Green", email: "shelli@hotmail.com", campus: {name: "Jupiter"}},
        {name: "Tina Romano", email: "tt_r@gmail.com", campus: {name: "Jupiter"}}

    ]
};


//console.log("in seed db:", db);
db.sync({force: true})
    .then(function () {

        const createCampus = data.Campus.map(function (campus) {
            return Campus.create(campus);
        });
        const createStudent = data.Student.map(function (student) {
            return Student.create(student, { include: [campus] });
        });

        return Promise.all([createCampus, createStudent]);
    })
    .then(function () {
        console.log("Finished inserting data (press ctrl-c to exit)");
    })
    .catch(function (err) {
        console.error('There was totally a problem', err, err.stack);
    });