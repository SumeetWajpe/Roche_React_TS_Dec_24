import { Component } from "react";
import { CourseModel } from "../../models/course.model";
import { Rating } from "../rating/rating";

type CourseProps = {
  coursedetails: CourseModel;
  DeleteACourse: (courseId: number) => void;
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
    console.log("Course - Within Render !");

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
            <p className="cart-text">
              <Rating noofstars={this.props.coursedetails.rating} />
            </p>
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
              onClick={() =>
                this.props.DeleteACourse(this.props.coursedetails.id)
              }
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
