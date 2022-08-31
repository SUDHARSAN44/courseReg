import logo from './logo.svg';
import './App.css';
import Course_catalog from './components/user/course_catalog/Course_catalog';
import Course_overview from './components/user/course_overview/Course_overview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCourse from './components/admin/AddCourse/AddCourse';
import NoPage from './components/NoPage';
import Home from './components/home/Home';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
          {/* <Route path={'/'} element={<Home />} /> */}
          <Route exact path={"/catalog"} element={<Course_catalog />}></Route>
          <Route path={"/overview/:id"} element={<Course_overview />} ></Route>
          <Route path={"/addCourse"} element={<AddCourse />} ></Route>
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;


{/* <div class="container">

<div className="container-nav">
    <ul>
      <li>Home</li>
      <li>Contact</li>
    </ul>
  </div>

<Course_catalog/>

<Course_overview/>
</div> */}
