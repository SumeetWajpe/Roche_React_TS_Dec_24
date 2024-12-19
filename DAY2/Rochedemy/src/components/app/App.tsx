import React from "react";

import ListOfCourses from "../listofcourses/listofcourses";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={ListOfCourses}></Route>
        <Route path="/posts" Component={Posts}></Route>
        <Route path="/getpostbyid" Component={GetPostById}></Route>
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

// class App extends React.Component {
//   render() {
//     return <ListOfCourses />;
//   }
// }
// export default App;
