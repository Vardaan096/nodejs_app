const _studentController = require('./student.controller');
const _studentValidator = require('./student.validators');
const prefix = '/api/v1/student';

module.exports = (app) => {
    app
        .route(prefix + '/create_student')
        .all(_studentValidator.validateCreateStudentSchema)
        .post(_studentController.createStudent);

    app
        .route(prefix + '/get_students')
        .get(_studentController.getAllStudents); 
    
    app
        .route(prefix + '/delete_student')
        .post(_studentController.deleteStudent);   
    app
        .route(prefix + '/update_student')
        .put(_studentController.updateStudent);      
}
 