import Box, { BoxProps } from "./Box";

export enum BoxStatus {
  OK = "#22c55e",
  Warning = "#facc15",
  Danger = "#dc2626",
}
type ResultBarProps = {
  className?: string;
};

const definedRanges: BoxProps[] = [
  { startRange: 0, range: 16.3, status: BoxStatus.Warning, pinLocation: 10 },
  { startRange: 16.3, range: 50, status: BoxStatus.OK, pinLocation: 50 },
  { startRange: 50, range: 120, status: BoxStatus.Danger },
];
const ResultBar = (props: ResultBarProps) => {
  return (
    <div
      className={`flex w-[25rem] h-2 ltr font-helvetica text-sm ${props.className}`}
    >
      {definedRanges.map((box) => (
        <Box {...box} />
      ))}
    </div>
  );
};

export default ResultBar;
