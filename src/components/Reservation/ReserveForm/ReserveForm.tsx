import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";
import { useState } from "react";

const ReserveForm = (props: { onForward: () => void }) => {
  const activeClasses: string =
    "bg-gray-200 hover:bg-gray-200 border-b-gray-400";

  const [bookForOthers, setBookForOthers] = useState(false);
  const clickHandler = (newState: boolean) => {
    setBookForOthers(newState);
  };

  return (
    <form className="mx-0 my-4" onSubmit={(e) => e.preventDefault()}>
      <div className="flex w-full justify-center mb-8 font-bold cursor-pointer">
        <div
          onClick={clickHandler.bind(null, false)}
          className={`transition-all
           p-4 w-1/2 text-center
            border-b border-gray-300 rounded-tr-3xl hover:bg-gray-100 ${
              !bookForOthers ? activeClasses : ""
            }`}
        >
          خودم
        </div>
        <div
          onClick={clickHandler.bind(null, true)}
          className={`transition-all p-4 w-1/2 text-center hover:bg-gray-100
           border-b border-gray-300 rounded-tl-3xl ${
             bookForOthers ? activeClasses : ""
           } `}
        >
          دیگری
        </div>
      </div>
      <Input
        className="bg-back"
        type="text"
        name={`نام و نام خانوادگی ${bookForOthers ? "بیمار" : ""}`}
        id="name"
      />
      <Input type="number" className="bg-back" name="شماره همراه" id="name" />
      <Input type="email" className="bg-back" name="نشانی اینترنتی" id="name" />
      <Button onClick={props.onForward} className={"mx-auto block mt-5"}>
        ادامه
      </Button>
    </form>
  );
};
export default ReserveForm;
