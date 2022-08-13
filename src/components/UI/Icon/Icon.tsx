import React from "react";
import { BsCheckLg, BsInstagram, BsWhatsapp, BsTwitter } from "react-icons/bs";

export enum IconList {
  checkMark,
  Instagram,
  Twitter,
  Whatsapp,
}

type IconProps = {
  icon: IconList;
  className?: string;
};

const Icon = (props: IconProps): React.ReactElement => {
  const { icon, className } = props;
  switch (icon) {
    case IconList.checkMark:
      return <BsCheckLg className={className} />;
    case IconList.Instagram:
      return <BsInstagram className={className} />;
    case IconList.Twitter:
      return <BsTwitter className={className} />;
    case IconList.Whatsapp:
      return <BsWhatsapp className={className} />;
    default:
      return <p>an error occured!</p>;
  }
};

export default Icon;
