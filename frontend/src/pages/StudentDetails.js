import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useStudentContext } from "../Hooks/useStudentContext";

const StudentDetails = () => {
    const { student, dispatch } = useStudentContext();
    // const [student, setStudent] = useState('');
    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [branch, setBranch] = useState('');
    const [year, setYear] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [dob, setDob] = useState('');



    useEffect(() => {

        const abortCont = new AbortController();

        const fetchStudent = async () => {

            const response = await fetch(`/api/students/${id}`);

            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_STUDENT', payload: json })
                setFirstName(json.firstName ? json.firstName : '')
                setMiddleName(json.middleName ? json.middleName : '')
                setLastName(json.lastName ? json.lastName : '')
                setAddress(json.address ? json.address : '')
                setEmail(json.email ? json.email : '')
                setDob(json.dob ? (json.dob).split('T')[0] : undefined)
                setYear(json.year ? json.year : '')
                setBranch(json.branch ? json.branch : '')
                setRollNo(json.rollNo ? json.rollNo : '')
            }
        }

        fetchStudent();
        return () => abortCont.abort();
    }, [id, dispatch])

    const handleUpdate = async (e) => {
        e.preventDefault();

        const student = { firstName, middleName, lastName, email, address, dob, branch, rollNo, year };
        // console.log(student);

        const response = await fetch(`/api/students/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'SET_STUDENT', payload: json });
            showupdated();
        }

    }
    const showupdated = () => {
        document.getElementById('updated').style.display = "block";
        console.log(document.getElementById('updated').style.display)

        setTimeout(() => {
            document.getElementById('updated').style.display = "none";
        }, 500);

    }




    return (
        <div className="student-details">
            <div id="updated">
                Updated !!
            </div>
            <h1>Student Details :</h1>

            <div className="student-details-main">
                <div className="student-details-headings">
                    {student && <h1>{`${student.firstName} ${student.lastName}`}</h1>}
                    <img src={"https://pub-static.fotor.com/assets/projects/pages/ed2f505cd64d46ffbb43c2b4d65cfaf3/300w/fotor-5965bfe16a014c9f81a074bbe55a0244.jpg"} alt="student image" />
                    {
                        student && <><div className="headings-branch">
                            <span className="bold">Branch : </span>{`   ${branch}`}</div>
                            <div className="headings-year"><span className="bold">Year : </span>{` ${year}`}</div>
                            <div className="headings-roll-no"><span className="bold">Roll No. : </span>{` ${rollNo}`}</div></>
                    }
                </div>

                <div className="other-details">
                    <div>
                        <p>First Name</p>
                        <input
                            type="text"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName} />
                    </div>
                    <div>
                        <p>Middle Name</p>
                        <input
                            type="text"
                            onChange={(e) => setMiddleName(e.target.value)}
                            value={middleName} />
                    </div>
                    <div>
                        <p>Last Name</p>
                        <input
                            type="text"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName} />
                    </div>
                    <div>
                        <p>Year</p>
                        <select id="year" name="year" value={year ? year : "First"} onChange={(e) => setYear(e.target.value)}>
                            <option value="First">First</option>
                            <option value="Second" >Second</option>
                            <option value="Third">Third</option>
                            <option value="Fourth">Fourth</option>
                        </select>
                    </div>
                    <div>
                        <p>Branch</p>
                        {/* <input
                            type="text"
                            onChange={(e) => setBranch(e.target.value)}
                            value={branch} /> */}
                        <select id="branch" name="branch" value={branch ? branch : "Computer"} onChange={(e) => setBranch(e.target.value)}>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Computer" >Computer</option>
                            <option value="Information Technology">Information Technology</option>
                            <option value="Electronics and Telecommunications">Electronics and Telecommunications</option>
                        </select>
                    </div>
                    <div>
                        <p>Roll No.</p>
                        <input
                            type="number"
                            onChange={(e) => setRollNo(e.target.value)}
                            value={rollNo} />
                    </div>
                    <div>
                        <p>Address</p>
                        <input
                            type="text"
                            onChange={(e) => setAddress(e.target.value)}
                            value={address} />
                    </div>
                    <div>
                        <p>Email</p>
                        <input
                            type="text"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email} />
                    </div>
                    <div>
                        <p>Date of Birth</p>
                        <input
                            type="date"
                            onChange={(e) => setDob(e.target.value)}
                            value={dob} />
                    </div>
                    <button onClick={handleUpdate}>Update</button>
                </div>
            </div>
        </div>

    );
}

export default StudentDetails;