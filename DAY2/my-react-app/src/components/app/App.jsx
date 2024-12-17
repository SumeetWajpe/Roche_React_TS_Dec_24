import React from "react";
import Message from "../message/message";

class App extends React.Component {
  messageOne = {
    msg: "Hello",
    from: "John",
    to: "Carter",
    imageUrl:
      "https://as2.ftcdn.net/v2/jpg/05/13/79/77/1000_F_513797754_KyKftzXhlul8FalDksafJf1TmtqrX1Px.jpg",
  };
  render() {
    return (
      <>
        <Message msgdetails={this.messageOne} />
        {/* <Message
          msg="Hey"
          from="James"
          to="Bond"
          imageUrl="https://c8.alamy.com/comp/2RB5J3G/hey-text-speech-bubble-hey-hi-hello-psst-hey-word-on-text-box-vector-illustration-hand-drawn-quote-hey-icon-lettering-doodle-phrase-design-f-2RB5J3G.jpg"
        />
        <Message
          msg="Hi"
          from="Peter"
          to="Parker"
          imageUrl="https://c8.alamy.com/comp/2CA3NX4/hi-word-in-splashs-background-2CA3NX4.jpg"
        /> */}
      </>
    );
  }
}
export default App;
