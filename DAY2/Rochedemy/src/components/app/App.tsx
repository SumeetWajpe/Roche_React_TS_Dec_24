import React from "react";

import ListOfCourses from "../listofcourses/listofcourses";
import Counter from "../counter/counter";
import Posts from "../posts/posts";
import GetPostById from "../getpostbyid/getpostbyid";

const App: React.FC = () => {
  return <ListOfCourses />;
  // return <Counter />;
  // return <Posts />;
  // return <GetPostById />;
};

export default App;

// class App extends React.Component {
//   render() {
//     return <ListOfCourses />;
//   }
// }
// export default App;
