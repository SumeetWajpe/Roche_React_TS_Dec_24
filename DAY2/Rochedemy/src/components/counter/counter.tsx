import React, { useState } from "react";

const Counter: React.FC = () => {
  let [data, setData] = useState({ count: 100, age: 18 });
  //   let [count, setCount] = useState(100);
  //   let [age, setAge] = useState(18);

  return (
    <div>
      <p> Count : {data.count} </p>
      <button
        className="btn btn-primary"
        onClick={() => setData({ ...data, count: data.count + 1 })}
      >
        {" "}
        Count++{" "}
      </button>
      <hr />
      <p> Age : {data.age} </p>
      <button className="btn btn-primary"> Age++ </button>
    </div>
  );
};

export default Counter;
