import Icon, { IconList } from "../../UI/Icon/Icon";
import { BoxStatus } from "./ResultBar";

export type BoxProps = {
  startRange: number;
  range: number;
  status: BoxStatus;
  pinLocation?: number;
};

const Box = (props: BoxProps) => {
  const { range, startRange, pinLocation, status } = props;
  return (
    <div style={{ flexGrow: range }}>
      <div
        className="h-3 text-3xl text-primary-900"
        style={{ backgroundColor: status }}
      >
        {pinLocation && (
          <div
            style={{
              transform: `translate(calc(${
                ((pinLocation - startRange) / range) * 100
              }% - 18px), -29px)`,
            }}
          >
            <Icon icon={IconList.Pin} />
          </div>
        )}
      </div>
      <div className="translate-x-3 mt-1 flex justify-end">
        <span>{(startRange + range).toFixed(1)}</span>
      </div>
    </div>
  );
};

export default Box;
