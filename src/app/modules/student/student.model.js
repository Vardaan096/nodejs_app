const mongoose = require('mongoose');
const Schema = mongoose.Schema
const subjectSchema = new Schema({

    subject: {
        type: String,
    },
    marks:{
        type:Number,
    }

})

const studentSchema = new Schema({

    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    class:{
        type:Number,
    },
    subjects:[subjectSchema]

}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
 
module.exports = User = mongoose.model('Student', studentSchema);