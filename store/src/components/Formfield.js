import React from "react";

const Formfield = ({
  text,
  type,
  massage,
  name,
  value,
  changeHandler,
  touchHandler,
  touch,
}) => {
  return (
    <div
      className={`flex my-1 ${
        type === "checkbox" ? "flex-row items-center" : "flex-col"
      }`}
    >
      <label className="capitalize font-medium mb-1" htmlFor={name}>
        {text}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        className={`flex my-1 transition-all delay-100 ${
          type === "checkbox"
            ? "ml-2 accent-sky-800"
            : "border border-blue-600 outline-none px-2 min-w-[250px] required:border-2 required:border-red-400 focus:border focus:border-sky-300 "
        }`}
        onChange={changeHandler}
        onFocus={touchHandler}
      />
      {touch && massage && (
        <p
          className={`flex my-1  ${
            type === "checkbox"
              ? ` ring-2 ring-red-500 rounded-full w-3 h-3 p-2 flex justify-center items-center ml-3 text-red-500 animate-ping `
              : "text-red-800 text-xs font-bold shadow-md shadow-red-200 bg-red-300 w-fit py-0.5 pr-4 pl-1 rounded-sm"
          }`}
        >
          {massage}
        </p>
      )}
    </div>
  );
};

export default Formfield;
