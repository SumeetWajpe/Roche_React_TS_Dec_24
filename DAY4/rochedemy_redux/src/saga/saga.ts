import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { CourseModel } from "../models/course.model";
import { SagaActions } from "./sagaactions";
import { SetAllCourses } from "../redux/reducers/courses.reducer";

function GetAllCourses() {
  return axios
    .get<CourseModel[]>("http://localhost:3500/courses")
    .then(res => res.data);
}

// worker saga
function* fetchCourses() {
  try {
    const courses: CourseModel[] = yield call(GetAllCourses);
    // console.log(courses);
    yield put(SetAllCourses(courses));
  } catch (err) {
    console.log(err);
  }
}

// root/watcher saga
export function* mySaga() {
  yield takeLatest(SagaActions.FETCH_COURSES_ASYNC, fetchCourses);
}
