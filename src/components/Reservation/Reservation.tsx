import Card from "../UI/Card/Card";
import ReserveItem from "./ReserveItem";
import Button from "../UI/Button/Button";
import ReserveTimeTable from "./ReserveTimeTable/ReserveTimeTable";
import ReserveForm from "./ReserveForm/ReserveForm";
import { useState } from "react";
import { useCallback } from "react";

const Reservation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const nextStepHandler = () => {
    setCurrentStep((prevStep) => {
      return prevStep + 1;
    });
  };
  const handleBackwardClick = useCallback(
    (step: number) => {
      if (step < currentStep) {
        setCurrentStep(step);
      }
    },
    [currentStep]
  );

  return (
    <Card
      className="flex flex-col mb-9 w-full p-4 bg-white md:mx-2  md:w-3/5"
      enableShadow
    >
      <h4 className="text-xl my-2 mb-5 font-bold">همین الان رزرو کن</h4>
      {/*step I */}
      <ReserveItem
        step={1}
        title="انتخاب نوع رزرو"
        currentStep={currentStep}
        onBack={handleBackwardClick}
      >
        <Button className="my-0 mx-auto block mt-6" onClick={nextStepHandler}>
          برو بعدی
        </Button>
      </ReserveItem>

      {/*step II */}
      <ReserveItem
        step={2}
        title="زمان مورد نظر را انتخاب کن"
        currentStep={currentStep}
        onBack={handleBackwardClick}
      >
        <ReserveTimeTable onForward={nextStepHandler} />
      </ReserveItem>

      {/*step III */}
      <ReserveItem
        step={3}
        title="مشخصات"
        currentStep={currentStep}
        onBack={handleBackwardClick}
      >
        <ReserveForm onForward={nextStepHandler} />
      </ReserveItem>

      {/*step IV */}
      <ReserveItem
        step={4}
        title="تایید و تکمیل فرایند"
        currentStep={currentStep}
        onBack={handleBackwardClick}
      >
        <p className="mt-2">مشاوره پنج شنبه 1401/4/22 ساعت 12:20 کاربر</p>
        <Button className="mx-auto my-0 block mt-7">ثبت نامم کن</Button>
      </ReserveItem>
    </Card>
  );
};
export default Reservation;
