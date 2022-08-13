import Reservation from "../Reservation/Reservation";
import DoctorPortfolio from "./DoctorPortfolio";

const DoctorProfile = () => {
  return (
    <div className="flex flex-col px-4 sm:px-14 md:flex-row max-w-3xl mx-auto mt-4 justify-evenly md:items-start items-center">
      <DoctorPortfolio fullName="علی فدائی منش" major="قلب و عروق" />
      <Reservation />
    </div>
  );
};

export default DoctorProfile;
