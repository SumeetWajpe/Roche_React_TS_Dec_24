import React from "react";

class Message extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.msg}</h2>
        <p>From : {this.props.from}</p>
        <p>To : {this.props.to}</p>
      </>
    );
  }
}

export default Message;
