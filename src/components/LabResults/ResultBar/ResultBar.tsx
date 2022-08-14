import Box, { BoxProps } from "./Box";

export enum BoxStatus {
  OK = "#22c55e",
  Warning = "#facc15",
  Danger = "#dc2626",
}
type ResultBarProps = {};

const definedRanges: BoxProps[] = [
  { startRange: 0, range: 10.3, status: BoxStatus.Warning },
  { startRange: 10.3, range: 20.2, status: BoxStatus.OK, pinLocation: 20 },
  { startRange: 20, range: 50, status: BoxStatus.Danger },
];
const ResultBar = (props: ResultBarProps) => {
  //FIXME: remove mt
  return (
    <div className="flex w-full h-2 ltr mt-20 font-helvetica text-sm">
      {definedRanges.map((box) => (
        <Box {...box} />
      ))}
    </div>
  );
};

export default ResultBar;
