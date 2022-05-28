import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center dark:bg-slate-800">
      <div className="w-12 h-12 rounded-full border-8 border-y-black animate-spin"></div>
    </div>
  );
};

export default Loading;
