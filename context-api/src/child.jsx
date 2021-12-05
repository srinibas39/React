import React from "react";

let Child = () => {
  console.log("child");

  return (
    <>
      <h1 /*className={props.theme?'dark':'light'}*/>I am a child component</h1>
    </>
  );
};
export default React.memo(Child);
