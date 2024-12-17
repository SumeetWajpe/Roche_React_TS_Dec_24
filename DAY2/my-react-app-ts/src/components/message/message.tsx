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
    return (
      <div className="col-md-3">
        <div className="card">
          <img
            src={this.props.msgdetails.imageUrl}
            className="card-img-top"
            alt={this.props.msgdetails.msg}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.msgdetails.msg} </h5>
            <p className="card-text">From : {this.props.msgdetails.from}</p>
            <p className="card-text">To : {this.props.msgdetails.to}</p>
          </div>
        </div>

        {/* <h2>{this.props.msgdetails.msg}</h2>
        <img
          src={this.props.msgdetails.imageUrl}
          alt={this.props.msgdetails.msg}
          height="100px"
          width="150px"
        />
        <p>From : {this.props.msgdetails.from}</p>
        <p>To : {this.props.msgdetails.to}</p> */}
      </div>
    );
  }
}

export default Message;
