import React from "react";

import ListOfCourses from "../listofcourses/listofcourses";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";
import CourseDetails from "../coursedetails/coursedetails";
import NewCourse from "../newcourse/newcourse";
// import NewCourse from "../newcourse/newcourse";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={ListOfCourses}></Route>
        <Route path="/newcourse" Component={NewCourse}></Route>
        <Route path="/coursedetails/:cid" Component={CourseDetails}></Route>

        <Route
          path="*"
          element={
            <>
              <h1>Page Not Found !</h1>
              <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
