import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOPs!!</h1>
      <h2>Something went wrong</h2>
      {err.status} : {err.statusText}
    </div>
  );
};

export default Error;
