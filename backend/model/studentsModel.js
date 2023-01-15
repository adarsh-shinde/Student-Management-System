const {mongoose} = require('mongoose');

const Schema = mongoose.Schema;

const studentsSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    middleName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    dob:{
        type:Date,
        required:false
    },
    year:{
        type:String,
        required: true
    },
    branch:{
        type:String,
        required: true
    },
    rollNo:{
        type:Number,
        required: true
    },
    email:{
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    }
})
module.exports = mongoose.model('Student', studentsSchema);

