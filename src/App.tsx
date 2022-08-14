import DoctorProfile from "./components/DoctorProfile/DoctorProfile";
import { Link, Routes, Route } from "react-router-dom";
import LabResults from "./components/LabResults/LabResults";
import Wrapper from "./components/UI/Wrapper/Wrapper";
import ResultBar from "./components/LabResults/ResultBar/ResultBar";
// import Reserve from "./components/Reservation/Reserve";

const Home = () => {
  return (
    <div className="flex flex-col mt-10 justify-evenly items-center text-center  font-bold">
      <h1 className="text-3xl">Welcome to UI elements</h1>
      <h2 className="text-accent">A project of Healhomat</h2>
      <div className="text-white">
        {UIElements.map((elem) => (
          <Link
            className="mx-auto block w-40 rounded-2xl my-3 p-4 bg-secondary"
            to={elem.link}
          >
            {elem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const UIElements = [
  { link: "/", element: <Home />, name: "Home" },
  { link: "/lab-result", element: <LabResults />, name: "Lab Results" },
  {
    link: "doctor-profile",
    element: <DoctorProfile />,
    name: "Doctor Profile",
  },
  {
    link: "result-bar",
    element: <ResultBar />,
    name: "Result Bar",
  },
];

const App = () => {
  return (
    <Wrapper>
      <Routes>
        {UIElements.map((elem) => {
          return <Route path={elem.link} element={elem.element} />;
        })}
      </Routes>
    </Wrapper>
  );
};

export default App;
