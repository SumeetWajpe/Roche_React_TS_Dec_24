import { createSlice } from "@reduxjs/toolkit";

let initialState: any = [{ id: 1, userId: 1, title: "Post 1" }];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    AddPost: (store, action) => {
      return store; // updated store
    },
  },
});
export const { AddPost } = postsSlice.actions;
export default postsSlice.reducer;
