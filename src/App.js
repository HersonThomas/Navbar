import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminNavbar from "./Components/AdminComponent/AdminDashboard/AdminNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/AdminComponent/AdminDashboard/Home";
import Course from "./Components/AdminComponent/AdminDashboard/Course";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
        <AdminNavbar />
        <Routes>          
          <Route path="/" element={<Home/>}/>
          <Route path="/course" element={<><Course/></>}/>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
