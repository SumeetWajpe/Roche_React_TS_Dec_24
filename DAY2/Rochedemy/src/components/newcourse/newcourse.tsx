import React from "react";
import { useForm } from "react-hook-form";

const NewCourse = () => {
  const { handleSubmit, register } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(formdata => {
          console.log(formdata);
        })}
      >
        <label>
          Id : <input type="text" {...register("id")} />
        </label>
        <label>
          Title : <input type="text" {...register("title")} />
        </label>
        <button className="btn btn-success">Add New Course</button>
      </form>
    </div>
  );
};

export default NewCourse;
