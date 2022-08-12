import React from "react";

type CardProps = {
  children: React.ReactNode;
  className: string;
  enableShadow?: boolean;
};
const Card = (props: CardProps) => {
  const { className, enableShadow, children } = props;
  return (
    <div
      className={`rounded-3xl ${className} ${enableShadow ? "shadow-lg" : ""}`}
    >
      {children}
    </div>
  );
};

export default Card;
