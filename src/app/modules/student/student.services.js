const Student = require('./student.model')
const logger = require('../../common/logger/logs');

exports.doCreateStudent = async (data) => {
    try {

        let student = data;
        //console.log(student,"data");
        const result = await Student.create(student);
        logger.info("/modules/auth/student.services.js:"," doCreateStudent ", result);
        if (result) {
            return {
                status: true,
                data: {
                    message: "Student Created Successfully"
                }
            }
        }else{
            return {
                status: false,
                data: "Error while creating student"
            }
        }

       
    } catch (error) {
        logger.error("/modules/student/student.services.js:"," doCreateStudent ", error);
        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while creating student, Try after some time!"
            }
        }
    }
}

exports.doGetAllStudents = async () => {
    try {
        let result = await Student.find()
        logger.info("/modules/student/student.services.js:"," doGetAllStudents ", result);
        if (result) {
            return {
                status: true,
                data: result
            }
        }else{
            return {
                status: false,
                data: "Error while getting all students"
            }
        }
        
    } catch (error) {
        logger.error("/modules/student/student.services.js:"," doGetAllStudents ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while getting students, Try after some time!"
            }
        }
    }
}
exports.doDeleteStudent = async (studentId) => {
    try {
        let result = await Student.findByIdAndDelete(studentId)
        logger.info("/modules/student/student.services.js:"," doDeleteStudent ", result);
        if (result) {
            return {
                status: true,
                message: "Student deleted Successfully"
            }
        }else{
            return {
                status: false,
                data: "Error while deleting  student"
            }
        }
        
    } catch (error) {
        logger.error("/modules/student/student.services.js:"," doDeleteStudent ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while deleting student, Try after some time!"
            }
        }
    }
}
exports.doUpdateStudent = async (data) => {
    try {
        let student = data;
        let result = await Student.findByIdAndUpdate(student.studentId,{firstName:student.firstName,lastName:student.lastName,class:student.class})

        logger.info("/modules/student/student.services.js:"," doUpdateStudent ", result);
        if (result) {
            return {
                status: true,
                message: "Student updated Successfully"
            }
        }else{
            return {
                status: false,
                data: "Error while updating student"
            }
        }
        
    } catch (error) {
        logger.error("/modules/student/student.services.js:"," doUpdateStudent ", error);

        if (error.code === 11000) {
            return {
                status: false,
                errorType: "MongoDB",
            }
        } else {
            console.log(JSON.stringify(error))
            return {
                status: false,
                message: "Error while updating student, Try after some time!"
            }
        }
    }
}

