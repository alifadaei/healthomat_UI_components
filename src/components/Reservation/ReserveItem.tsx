import React from "react";
import Card from "../UI/Card/Card";
import Icon, { IconList } from "../UI/Icon/Icon";
import { Transition } from "react-transition-group";
type ReserveItemTitleProps = {
  title: string;
  step: number;
  isFullfilled: boolean;
};

const ReservationItemTitle = (props: ReserveItemTitleProps) => {
  const { title, step, isFullfilled } = props;
  return (
    <div className="flex items-center">
      <div
        className={`h-10 w-10 flex items-center justify-center rounded-full
        ml-3 text-center text-lg  relative
        text-white ${isFullfilled ? "bg-green-500 text-sm" : "bg-primary"}`}
      >
        <Transition in={isFullfilled} timeout={500} mountOnEnter unmountOnExit>
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
        {!isFullfilled && step}
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
};
const ReserveItem = (props: ReserveItemProps) => {
  const { children, title, step, currentStep } = props;
  const isOpen = step === currentStep;
  const isFullfilled = currentStep > step;
  return (
    <Card className="p-5 bg-back mb-5" enableShadow={false}>
      <ReservationItemTitle
        title={title}
        step={step}
        isFullfilled={isFullfilled}
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
