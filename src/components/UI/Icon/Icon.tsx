import React from "react";
import { BsCheckLg, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
export enum IconList {
  checkMark,
  Instagram,
  Twitter,
  Whatsapp,
  Pin,
}

type IconProps = {
  icon: IconList;
  className?: string;
  style?: React.CSSProperties;
};

const Icon = (props: IconProps): React.ReactElement => {
  const { icon, className, style } = props;
  const IconProps = { className, style };
  switch (icon) {
    case IconList.checkMark:
      return <BsCheckLg {...IconProps} />;
    case IconList.Instagram:
      return <BsInstagram {...IconProps} />;
    case IconList.Twitter:
      return <BsTwitter {...IconProps} />;
    case IconList.Whatsapp:
      return <BsWhatsapp {...IconProps} />;
    case IconList.Pin:
      return <IoLocationSharp {...IconProps} />;
    default:
      return <p>an error occured!</p>;
  }
};

export default Icon;
