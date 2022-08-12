import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
};
const Button = (props: ButtonProps) => {
  return (
    <button
      className={`bg-primary text-white 
      cursor-pointer text-md leading-4 rounded-full
      px-6 py-2 hover:bg-[#a7b3ab] transition-all
      ease-in ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
export default Button;
