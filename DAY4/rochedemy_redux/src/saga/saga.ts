import axios from "axios";
import { call, put, retry, takeLatest } from "redux-saga/effects";
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

function* fetchCoursesWithRetry() {
  try {
    const SECOND = 1000;
    const courses: CourseModel[] = yield retry(3, 10 * SECOND, GetAllCourses);
    yield put(SetAllCourses(courses));
  } catch (error) {
    console.log(error);
  }
}

// root/watcher saga
export function* mySaga() {
  //   yield takeLatest(SagaActions.FETCH_COURSES_ASYNC, fetchCourses);
  yield takeLatest(SagaActions.FETCH_COURSES_ASYNC, fetchCoursesWithRetry);
}
