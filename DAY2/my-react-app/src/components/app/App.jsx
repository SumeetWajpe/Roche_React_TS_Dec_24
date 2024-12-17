import React from "react";
import Message from "../message/message";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Message msg="Hello" from="John" to="Carter" />
        <Message msg="Hey" from="James" to="Bond" />
        <Message msg="Hi" from="Peter" to="Parker" />
      </>
    );
  }
}
export default App;
