import Card from "../UI/Card/Card";
import ReserveItem from "./ReserveItem";
import Button from "../UI/Button/Button";
import ReserveTimeTable from "./ReserveTimeTable/ReserveTimeTable";
import ReserveForm from "./ReserveForm/ReserveForm";
import { useState } from "react";

const Reserve = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStepHandler = () => {
    setCurrentStep((prevStep) => {
      return prevStep + 1;
    });
  };

  return (
    <Card
      className="flex flex-col my-4 mx-auto p-4 w-[25rem] bg-white"
      enableShadow
    >
      <h4 className="text-xl my-2 mb-5 font-bold">همین الان رزرو کن</h4>
      {/*step I */}
      <ReserveItem step={1} title="انتخاب نوع رزرو" currentStep={currentStep}>
        <Button className="my-0 mx-auto block mt-6" onClick={nextStepHandler}>
          برو بعدی
        </Button>
      </ReserveItem>

      {/*step II */}
      <ReserveItem
        step={2}
        title="زمان مورد نظر را انتخاب کن"
        currentStep={currentStep}
      >
        <ReserveTimeTable onForward={nextStepHandler} />
      </ReserveItem>

      {/*step III */}
      <ReserveItem step={3} title="مشخصات" currentStep={currentStep}>
        <ReserveForm onForward={nextStepHandler} />
      </ReserveItem>

      {/*step IV */}
      <ReserveItem
        step={4}
        title="تایید و تکمیل فرایند"
        currentStep={currentStep}
      >
        <p className="mt-2">مشاوره پنج شنبه 1401/4/22 ساعت 12:20 کاربر</p>
        <Button className="mx-auto my-0 block mt-7">ثبت نامم کن</Button>
      </ReserveItem>
    </Card>
  );
};
export default Reserve;