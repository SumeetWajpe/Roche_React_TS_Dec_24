import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { CourseModel } from "../models/course.model";

// worker saga

function GetAllCourses() {
  return axios
    .get<CourseModel[]>("http://localhost:3500/courses")
    .then(res => res.data);
}

function* fetchCourses() {
  try {
    const courses: CourseModel[] = yield call(GetAllCourses);
    yield put();
  } catch (err) {
    console.log(err);
  }
}

// root/watcher saga
export function* mySaga() {
  yield takeLatest("FETCH_COURSES_ASYNC", fetchCourses);
}
