import React, { useEffect } from "react";
import Router from "./Router";

const Loader = ({setTimeout}) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
        document.querySelector('.pageLoader').classList.add('Loaded');
        setInterval(() => {
            setTimeout(false)
        }, 1000);
    }, 3000);
    return () => {clearInterval(intervalId)}
  }, []);

  return (
    <div className="pageLoader">
      <span>Rahul Sadhwani</span>
      <span>Rahul Sadhwani</span>
    </div>
  );
};

export default Loader;
