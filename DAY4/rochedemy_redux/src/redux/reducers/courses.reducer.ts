import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CourseModel } from "../../models/course.model";

let initialState: CourseModel[] = [];

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    IncrementLikes: (store: CourseModel[], action: PayloadAction<number>) => {
      let courseId = action.payload;
      // store => immutable
      let index = store.findIndex(c => c.id == courseId);
      store[index].likes++; // immer allows us to mutate the store and it creates a newer store object
      return store; // updated store
    },
    AddNewCourse(store: CourseModel[], action: PayloadAction<CourseModel>) {
      store.push(action.payload);
      return store;
    },
    SetAllCourses(store: CourseModel[], action: PayloadAction<CourseModel[]>) {
      store = action.payload;
      return store;
    },
  },
});
export const { IncrementLikes, AddNewCourse, SetAllCourses } =
  coursesSlice.actions;
export default coursesSlice.reducer;
