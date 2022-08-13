import Card from "../../UI/Card/Card";
import ReserveTimeItems from "./ReserveTimeItems";
import { useState } from "react";
import { Transition } from "react-transition-group";

/**
 * A wraper for table cells
 */
const ReserveTimeCell = (props: { time: string }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-back hover:bg-primary-100 transition-all border border-white">
      <div className="p-4">{props.time}</div>
    </div>
  );
};

const ReserveTimeTable = (props: { onForward: () => void }) => {
  const list = [
    {
      id: 1,
      day: "چهارشنبه",
      date: "1401/02/21",
      times: [
        { time: "14:20", time_id: 1 },
        { time: "15:20", time_id: 2 },
        { time: "16:20", time_id: 3 },
      ],
    },
    {
      id: 2,
      day: "پنج شنبه",
      date: "1401/02/22",
      times: [
        { time: "14:20", time_id: 4 },
        { time: "15:20", time_id: 5 },
        { time: "16:20", time_id: 6 },
      ],
    },
    {
      id: 3,
      day: "شنبه",
      date: "1401/02/23",
      times: [
        { time: "14:20", time_id: 7 },
        { time: "15:20", time_id: 8 },
        { time: "16:20", time_id: 9 },
      ],
    },
  ];

  const clickHandler = (timeID: number) => {
    setOpenedID(timeID);
  };

  const [openedTimeID, setOpenedID] = useState(0);

  return (
    <Card
      className="bg-back mt-2 w-full 
    flex overflow-visible items-start justify-evenly"
    >
      {list.map((col, index) => {
        return (
          <div
            key={col.id}
            className="w-[calc(100%/3)] flex
           flex-col justify-evenly "
          >
            <div
              className={`p-2 py-4 sm flex flex-col 
            justify-center items-center bg-white
             border border-solid border-white 
             transition-all duration-700
              ${index === 2 ? "rounded-tl-3xl" : ""} 
             ${index === 0 ? "rounded-tr-3xl" : ""}
             `}
            >
              <div className="font-bold text-sm sm:text-base">{col.day}</div>
              <small className="text-xs">{col.date}</small>
            </div>
            {col.times.map((time) => {
              const isOpen = openedTimeID === time.time_id;
              return (
                <div
                  key={time.time_id}
                  onClick={clickHandler.bind(null, time.time_id)}
                  className={`${isOpen && "border border-primary-500"}`}
                >
                  <ReserveTimeCell time={time.time} />
                  <Transition in={isOpen} timeout={300}>
                    {(state) => {
                      return (
                        <div
                          className={`transition-all duration-300 overflow-hidden
                        ${
                          state === "entering" || state === "entered"
                            ? "max-h-[10rem]"
                            : state === "exiting" || state === "exited"
                            ? "max-h-[0]"
                            : null
                        }
                        `}
                        >
                          <ReserveTimeItems onForward={props.onForward} />
                        </div>
                      );
                    }}
                  </Transition>
                </div>
              );
            })}
          </div>
        );
      })}
    </Card>
  );
};
export default ReserveTimeTable;
