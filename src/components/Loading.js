import React from "react";
import loadingImg from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className='loading'>
      <img className='loading_img' src={loadingImg} alt="loading" />
    </div>
  );
};
export default Loading;
