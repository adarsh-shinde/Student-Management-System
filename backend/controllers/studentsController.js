const { mongoose } = require('mongoose');

const Student = require('../model/studentsModel')

// get all students
const getStudents = async (req, res) => {
    const students = await Student.find({}).sort({ createdAt: -1 });
    res.status(200).json(students);
}

// get single student
const getStudent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such student' });
    }

    const student = await Student.findById(id);

    if (!student) {
        return res.status(400).json({ error: 'No such student' });
    }

    res.status(200).json(student);
}

// create a new student
const createStudent = async (req, res) => {

    try {
        const { firstName, middleName, lastName, rollNo, year, branch } = req.body;

        const student = await Student.create({ firstName, middleName, lastName, rollNo, year, branch })
        res.status(200).json(student);
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// delete Student
const deleteStudent = async (req, res) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such student' });
    }

    const student = await Student.findOneAndDelete({ _id: id });

    if (!student) {
        return res.status(400).json({ error: 'No such student' });
    }
    res.status(200).json(student);
}

// update a student
const updateStudent = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'No such student' });
    }

    const student = await Student.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, { new: true }
    )
    // const updated = await Student.findById(id);
    // console.log(student);
    if (!student) {
        return res.status(400).json({ error: 'No such student' });
    }
    // console.log(updated);

    res.status(200).json(student);

}

module.exports = {
    getStudent,
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
}