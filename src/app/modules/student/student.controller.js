const _studentService = require('./student.services')
const errors = {}
exports.createStudent = async (req, res, next) => {
    try {
        const studentPayload = req.body
        const result = await _studentService.doCreateStudent(studentPayload)
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }  
}
exports.getAllStudents = async (req, res, next) => {
    try {
        const result = await _studentService.doGetAllStudents()
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }
}
exports.deleteStudent = async (req, res, next) => {
    try {
        let studentId = req.body.studentId
        const result = await _studentService.doDeleteStudent(studentId)
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }
}
exports.updateStudent = async (req, res, next) => {
    try {
        let data = req.body
        const result = await _studentService.doUpdateStudent(data)
        console.log(result);
        if (result.status === true) {
            return res.success.OK(result.message, { response: result })
        }

        if (result.status === false) {
            errors.response = result.data
            return res.error.BadRequest(result.message, { errors })
        }

        if (result.errorType == 'MongoDB') {
            errors.response = result.data
            return res.error.UnprocessableEntity(result.message, { errors })
        }
    } catch (error) {
        next(error)
    }
}



 