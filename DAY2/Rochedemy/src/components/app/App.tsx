import React from "react";

import "./App.css";
import ListOfCourses from "../listofcourses/listofcourses";
import Counter from "../counter/counter";

const App: React.FC = () => {
  // return <ListOfCourses />;
  return <Counter />;
};

export default App;

// class App extends React.Component {
//   render() {
//     return <ListOfCourses />;
//   }
// }
// export default App;
