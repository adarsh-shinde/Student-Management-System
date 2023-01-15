import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import StudentDetails from "./pages/StudentDetails";

function App() {
  return (

    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              exact path="/"
              element={<Home />} >
            </Route>
            <Route
            exact path= "/:id"
            element= {<StudentDetails/>}>

            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
