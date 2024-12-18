import { Component } from "react";
import { CourseModel } from "../../models/course.model";

type CourseProps = {
  coursedetails: CourseModel;
  DeleteACourse: () => void;
};

export default class Course extends Component<CourseProps> {
  state = { currLikes: this.props.coursedetails.likes };
  IncrementLikes() {
    console.log("Within IncrementLikes !");
    // console.log(this.props.coursedetails.likes++); // props are readonly
    //this.state.currLikes++; // state is immutable
    this.setState({ currLikes: this.state.currLikes + 1 });
  }

  render() {
    console.log("Within Render !");
    var ratings = [];

    for (let index = 0; index < this.props.coursedetails.rating; index++) {
      ratings.push(
        <i className="fa-solid fa-star" style={{ color: "orange" }}></i>,
      );
    }

    return (
      <div className="col-md-3">
        <div className="card m-2 p-2 shadow rounded-0">
          <img
            src={this.props.coursedetails.imageUrl}
            className="card-img-top"
            alt="..."
            width="150px"
            height="150px"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.coursedetails.title}</h5>
            <p className="cart-text">{ratings}</p>
            <p className="card-text">₹. {this.props.coursedetails.price}</p>
            <button
              className="btn btn-outline-primary"
              onClick={() => this.IncrementLikes()}
            >
              {this.state.currLikes}
              {/* {this.props.coursedetails.likes}{" "} */}
              <i className="fa-regular fa-thumbs-up"></i>
            </button>

            <button
              className="btn btn-danger mx-2"
              onClick={() => this.props.DeleteACourse()}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
