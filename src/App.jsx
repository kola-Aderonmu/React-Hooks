import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const [resourceType, setResourceType] = useState("posts")

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);



  useEffect(() => {
    console.log("resource changed")
    
    return () => {

    console.log("return from resource change")
    }
    }, [resourceType]);
 

  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      {/* **********************************************************
      **********************************************************
      UseEffectHook */}

      <br></br>

      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
    </>
  );
};

export default App;
