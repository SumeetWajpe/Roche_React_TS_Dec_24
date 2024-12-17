import React from "react";

export class MessageModel {
  constructor(
    public msg: string,
    public from: string,
    public to: string,
    public imageUrl: string,
  ) {}
}

type MessagePropTypes = {
  msgdetails: MessageModel;
};

class Message extends React.Component<MessagePropTypes> {
  render() {
    return <h2> {this.props.msgdetails.msg}</h2>;
  }
}

export default Message;
