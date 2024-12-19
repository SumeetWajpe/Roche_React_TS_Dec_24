import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((store: any) => store.posts);
  console.log(posts);
  return <h1> App Component !</h1>;
}

export default App;
