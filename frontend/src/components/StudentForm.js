import { useState } from "react";
import { useStudentsContext } from "../Hooks/useStudentsContext";

const StudentForm = () => {

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [year, setYear] = useState('');
    const [branch, setBranch] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [error, setError] = useState(null);
    const { dispatch } = useStudentsContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const student = { firstName, middleName, lastName, year, branch, rollNo }
        console.log(student);

        const response = await fetch('/api/students', {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);

        }
        if (response.ok) {
            setFirstName('');
            setMiddleName('');
            setLastName('');
            setYear('');
            setBranch('');
            setRollNo('')
            setError(null);
            dispatch({ type: 'CREATE_STUDENT', payload: json })
        }
    }

    return (
        <div className="form-div">
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="outer-div">
                    <div className="inner-div">
                        <label>First Name</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="inner-div">
                        <label>Middle Name</label>
                        <input
                            type="text"
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)} />
                    </div>
                </div>
                <div className="outer-div">
                    <div className="inner-div">
                        <label>Last Name</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="inner-div">
                        <label>Year</label>
                        <select id="year" name="year" value={year ? year : "First"} onChange={(e) => setYear(e.target.value)}>
                            <option value="First">First</option>
                            <option value="Second" >Second</option>
                            <option value="Third">Third</option>
                            <option value="Fourth">Fourth</option>
                        </select>
                    </div>
                </div>
                <div className="outer-div">
                    <div className="form-div-1">
                        <label>Branch</label>
                        <select id="branch" name="branch" value={branch ? branch : "Computer"} onChange={(e) => setBranch(e.target.value)}>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Computer" >Computer</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Electronics and Telecommunications">Electronics and Telecommunications</option>
                        </select>
                    </div>
                    <div className="form-div-1">
                        <label>Roll No.</label>
                        <input className="this"
                            type="number"
                            value={rollNo}
                            onChange={(e) => setRollNo(e.target.value)} />
                    </div>
                </div>
                <button>Submit</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    );
}

export default StudentForm;