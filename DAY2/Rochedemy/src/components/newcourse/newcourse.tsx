import React from "react";
import { useForm } from "react-hook-form";

const NewCourse = () => {
  const { handleSubmit, register } = useForm();
  return (
    <>
      <header>
        <h1> New Course</h1>
      </header>
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit(formdata => {
            console.log(formdata);
          })}
        >
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("id")}
                placeholder="Course Id"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="text"
                {...register("title")}
                placeholder="Course Title"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("price")}
                placeholder="Course Price"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("rating")}
                placeholder="Course Rating"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="number"
                {...register("likes")}
                placeholder="Course Likes"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <input
                type="text"
                {...register("imageUrl")}
                placeholder="Course ImageUrl"
              />
            </div>
          </div>
          <div className="row m-1">
            <div className="col-md-3">
              <textarea
                rows={5}
                {...register("description")}
                placeholder="Course Description"
              />
            </div>
          </div>

          <button className="btn btn-success m-1">Add New Course</button>
        </form>
      </div>
    </>
  );
};

export default NewCourse;
