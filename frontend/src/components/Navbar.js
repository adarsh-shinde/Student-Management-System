import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <header>
                <Link to={'/'}><h1>Student Management System</h1></Link>
                {/* <h1><Link to ="/">The Dojo Blog</Link></h1> */}

            </header>
        </div>
    );
}

export default Navbar;