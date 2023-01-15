const express = require('express');
const {
    getStudent,
    getStudents,
    createStudent,
    deleteStudent,
    updateStudent
} = require('../controllers/studentsController')
const router = express.Router();

router.get('/', getStudents);

router.get('/:id', getStudent);

router.post('/', createStudent);

router.delete('/:id',deleteStudent);

router.patch('/:id', updateStudent);

module.exports = router;