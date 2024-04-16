// full page InfinitySpin loader

import React from "react";
import { InfinitySpin } from "react-loader-spinner";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
      <InfinitySpin color="#00BFFF" height={100} width={100} />
    </div>
  );
}

export default Loader;
