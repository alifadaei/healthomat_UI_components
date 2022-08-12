type ReserveTimeItemsProps = {
  onForward: () => void;
};
const ReserveTimeItems = (props: ReserveTimeItemsProps) => {
  const itemsList = ["ادامه", "اضافه کردن", "تکرار شونده"];
  return (
    <div className="flex flex-col py-2 px-0 justify-center items-center bg-back">
      {itemsList.map((item) => {
        return (
          <button
            onClick={item === "ادامه" ? props.onForward : undefined}
            key={Math.random()}
            className="rounded-3xl w-[85%] py-1 mb-2 px-4 text-xs 
              shadow-xl bg-white font-light transition-all duration-700
              hover:bg-primary-900 hover:text-white"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
export default ReserveTimeItems;
