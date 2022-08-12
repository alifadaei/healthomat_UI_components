import React from "react";

type InputProps = {
  id: string;
  name: string;
  type: string;
  className: string;
};

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col mx-0 my-4">
      <label className="text-md font-bold mb-3" htmlFor={props.id}>
        {props.name}
      </label>
      <input
        id={props.id}
        type={props.type}
        className={`border-b border-[rgb(114, 114, 114)] 
        pl-4 pt-1 pb-1 transition
        focus-visible:outline-none focus-visible:border-gray-400
        ${props.className}`}
      />
    </div>
  );
};
export default Input;
