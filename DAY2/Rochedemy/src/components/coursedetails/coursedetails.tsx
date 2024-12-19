import React from "react";
import { useParams } from "react-router-dom";

const CourseDetails: React.FC = () => {
  const { cid } = useParams(); // hook
  return (
    <div>
      <header>
        <h1>Course Details for {cid}</h1>
      </header>
    </div>
  );
};

export default CourseDetails;
