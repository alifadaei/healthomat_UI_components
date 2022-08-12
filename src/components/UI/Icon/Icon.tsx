import React from "react";
import { BsCheckLg } from "react-icons/bs";

export enum IconList {
  checkMark,
}

type IconProps = {
  icon: IconList;
  className: string;
};

const Icon = (props: IconProps): React.ReactElement => {
  const { icon, className } = props;
  switch (icon) {
    case IconList.checkMark:
      return <BsCheckLg className={className} />;
    default:
      return <p>an error occured!</p>;
  }
};

export default Icon;
