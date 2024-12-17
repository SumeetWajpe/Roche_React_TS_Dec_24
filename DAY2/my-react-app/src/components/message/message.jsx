import React from "react";

class Message extends React.Component {
  render() {
    return (
      <>
        <h2>{this.props.msgdetails.msg}</h2>
        <img
          src={this.props.msgdetails.imageUrl}
          alt={this.props.msgdetails.msg}
          height="100px"
          width="150px"
        />
        <p>From : {this.props.msgdetails.from}</p>
        <p>To : {this.props.msgdetails.to}</p>
      </>
    );
  }
}

export default Message;
