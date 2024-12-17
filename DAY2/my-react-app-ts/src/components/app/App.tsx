import React from "react";
import "./App.css";
import Message, { MessageModel } from "../message/message";

class App extends React.Component {
  messages: MessageModel[] = [
    {
      msg: "Hello",
      from: "John",
      to: "Carter",
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/05/13/79/77/1000_F_513797754_KyKftzXhlul8FalDksafJf1TmtqrX1Px.jpg",
    },
    {
      msg: "Hello",
      from: "John",
      to: "Carter",
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/05/13/79/77/1000_F_513797754_KyKftzXhlul8FalDksafJf1TmtqrX1Px.jpg",
    },
    {
      msg: "Hello",
      from: "John",
      to: "Carter",
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/05/13/79/77/1000_F_513797754_KyKftzXhlul8FalDksafJf1TmtqrX1Px.jpg",
    },
  ];
  render() {
    return (
      <>
        {this.messages.map(m => (
          <Message msgdetails={m} />
        ))}
      </>
    );
  }
}

export default App;
