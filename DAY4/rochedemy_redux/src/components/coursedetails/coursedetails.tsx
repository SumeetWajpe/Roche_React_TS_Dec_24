import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CourseModel } from "../../models/course.model";
import { Rating } from "../rating/rating";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/store/store";

const CourseDetails: React.FC = () => {
  const { cid } = useParams(); // hook

  const courses = useSelector((store: AppState) => store.courses);
  const theCourse = courses.find((c: CourseModel) => c.id == Number(cid));

  return (
    <div>
      <header>
        <h1>Course Details for {cid}</h1>
      </header>
      <main>
        <div className="row">
          <div className="col-md-9">
            <img
              src={theCourse?.imageUrl}
              alt={theCourse?.title}
              width="100%"
            />
          </div>
          <div className="col-md-3">
            <h2>{theCourse?.title}</h2>
            <Rating noofstars={theCourse?.rating || 0} />
            <p>
              <button className="btn btn-outline-primary">
                {theCourse?.likes} <i className="fa-regular fa-thumbs-up"></i>
              </button>
            </p>
            <p>{theCourse?.description}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetails;
