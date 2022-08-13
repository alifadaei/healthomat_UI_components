import Card from "../UI/Card/Card";
import DoctorDefaultSVG from "../../assets/Pic/doctor-default.svg";
import { IconList } from "../UI/Icon/Icon";
import Icon from "../UI/Icon/Icon";
export type DoctorPortfolioDetail = {
  fullName: string;
  major: string;
  profilePicture?: string;
  instagram?: string;
  twitter?: string;
  whatsapp?: string;
};

const DoctorPortfolio = (props: DoctorPortfolioDetail) => {
  const iconsList = [IconList.Twitter, IconList.Instagram, IconList.Whatsapp];

  return (
    <Card
      className="flex flex-col w-full md:w-2/5 mb-4 md:mx-2 justify-between items-center bg-white p-8 text-center"
      enableShadow
    >
      <img
        className="rounded-full w-3/5 mb-4"
        src={props.profilePicture || DoctorDefaultSVG}
        alt="profile"
      />

      <h1 className="font-bold text-lg">دکتر {props.fullName}</h1>
      <h3 className="mb-4">{props.major}</h3>

      <div className="flex justify-evenly items-center w-48 text-2xl">
        {iconsList.map((icon) => {
          return (
            <Icon
              className="text-accent transition-all duration-100 hover:translate-y-[-.12rem]"
              icon={icon}
            />
          );
        })}
      </div>
    </Card>
  );
};

export default DoctorPortfolio;
