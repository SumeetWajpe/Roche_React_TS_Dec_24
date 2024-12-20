import { configureStore } from "@reduxjs/toolkit";
import courses from "../reducers/courses.reducer";
import posts from "../reducers/posts.reducer";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "../../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { courses, posts },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// Run watcher Saga (register sagas with redux)
sagaMiddleware.run(mySaga);

export type AppState = ReturnType<typeof store.getState>;
export default store;
