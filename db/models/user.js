'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


// module.exports = db.define('user', {
//   name: Sequelize.STRING,
// })

const Student = db.define('student', {
    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    }
});

const Campus = db.define('campus', {
    name: Sequelize.STRING,
    image: Sequelize.STRING
});

Student.belongsTo(Campus);
//
Campus.belongsToMany(Student, { through: 'studentCampus' });

module.exports = {
    Student,
    Campus
};