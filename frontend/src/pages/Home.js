import { useEffect } from "react";
import { Link } from 'react-router-dom'
import StudentForm from "../components/StudentForm";
import { useStudentsContext } from "../Hooks/useStudentsContext";

const Home = () => {
    const { students, dispatch } = useStudentsContext();

    useEffect(() => {
        const fetchStudents = async () => {

            const response = await fetch('/api/students')

            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_STUDENTS', payload: json })
            }

            // console.log(json);
        }

        fetchStudents();

    }, [dispatch])

    const handleDelete = async (student) => {
        console.log(student);

        const response = await fetch(`/api/students/${student._id}`, {
            method: 'DELETE',
        })
        const json = await response.json();

        if (response.ok) {
            dispatch({ type: 'DELETE_STUDENT', payload: json })
        }

    }

    return (
        <div className="home">

            <main>
                <div className="table">
                    <table>
                        <tbody>
                            <tr>
                                <th>Roll. No</th>
                                <th>Name</th>
                                <th>Year</th>
                                <th>Branch</th>
                                <th></th>
                            </tr>
                            {!students && <tr>No Students</tr>}
                            {students && students.map((student, key) => (
                                <tr key={key}>
                                    <td>{student.rollNo}</td>
                                    <td>
                                        <Link to={`/${student._id}`} className="blue">
                                            {student.firstName + ' ' + student.middleName + ' ' + student.lastName}
                                        </Link>
                                    </td>
                                    <td>{student.year}</td>
                                    <td>{student.branch}</td>
                                    <td><button onClick={() => handleDelete(student)}>Delete</button>
                                        <button><Link to={`/${student._id}`}>Edit</Link></button></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="form">
                    <StudentForm />
                </div>
            </main>
        </div>
    );
}

export default Home;