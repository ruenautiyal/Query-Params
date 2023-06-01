import React from "react";

const App = () => {
  // http://localhost:3000/?type=RueNautiyal
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get("type");
  localStorage.setItem("typeCode", code);
  return (
    <>
       <p>{code}</p>
    </>
  );
};
export default App;