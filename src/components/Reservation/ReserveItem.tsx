import React from "react";
import Card from "../UI/Card/Card";
import Icon, { IconList } from "../UI/Icon/Icon";
import { Transition } from "react-transition-group";
import { useState } from "react";

type ReserveItemTitleProps = {
  title: string;
  step: number;
  isFullfilled: boolean;
  onBack: (step: number) => void;
};
const ReservationItemTitle = (props: ReserveItemTitleProps) => {
  const { title, step, isFullfilled, onBack } = props;

  const [showNumber, setShowNumber] = useState(!isFullfilled);

  return (
    <div className="flex items-center" onClick={onBack.bind(null, step)}>
      <div
        className={`h-10 w-10 flex items-center justify-center rounded-full
        ml-3 text-center text-lg  relative
        text-white ${isFullfilled ? "bg-green-500 text-sm" : "bg-primary"}`}
      >
        <Transition
          in={isFullfilled}
          timeout={500}
          mountOnEnter
          unmountOnExit
          onEnter={() => {
            setShowNumber(false);
          }}
          onExited={() => {
            setShowNumber(true);
          }}
        >
          {(state: string) => {
            const classNames =
              state === "entering"
                ? "enterBounce"
                : state === "exiting"
                ? "exitBounce"
                : "null";
            return <Icon icon={IconList.checkMark} className={classNames} />;
          }}
        </Transition>
        {showNumber && <div className="enterBounce">{step}</div>}
      </div>

      <h4 className="m-0 font-semibold">{title}</h4>
    </div>
  );
};

type ReserveItemProps = {
  children: React.ReactNode;
  title: string;
  step: number;
  currentStep: number;
  onBack: (step: number) => void;
};
const ReserveItem = (props: ReserveItemProps) => {
  const { children, title, step, currentStep, onBack } = props;
  const isOpen = step === currentStep;
  const isFullfilled = currentStep > step;
  return (
    <Card className="p-5 bg-back mb-5" enableShadow={false}>
      <ReservationItemTitle
        title={title}
        step={step}
        isFullfilled={isFullfilled}
        onBack={onBack}
      />
      <div
        className={`
      transition-all duration-500 overflow-hidden  ${
        isOpen ? "max-h-[50rem]" : "max-h-[0]"
      }
      `}
      >
        {children}
      </div>
    </Card>
  );
};
export default ReserveItem;
