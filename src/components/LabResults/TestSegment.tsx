import Card from "../UI/Card/Card";
import ResultBar from "./ResultBar/ResultBar";

const TestSegment = () => {
  const tableData = {
    firstRow: [
      "Company",
      "Contract",
      "Country",
      "blood",
      "color",
      "sex",
      "bar",
    ],
    rows: [
      [
        "Alfreds Futterkiste",
        "Maria Anders",
        "Germany",
        "red",
        "red",
        "blue",
        <ResultBar />,
      ],
      [
        "Centro comercial Moctezuma",
        "Francisco Chang",
        "Mexico",
        "red",
        "red",
        "blue",
        <ResultBar />,
      ],
      [
        "Centro comercial Moctezuma",
        "Francisco Chang",
        "Mexico",
        "red",
        "red",
        "blue",
        <ResultBar />,
      ],
    ],
  };
  return (
    <Card className="bg-white mx-auto mt-5 p-5 ltr font-helvetica" enableShadow>
      <h2 className="text-2xl mb-5 font-bold">Test Segment</h2>
      <div className="overflow-hidden overflow-x-auto">
        <table className="min-w-full">
          <tr className=" bg-primary-900 text-white">
            {tableData.firstRow.map((col) => (
              <th className="p-4">{col}</th>
            ))}
          </tr>
          {tableData.rows.map((row) => {
            return (
              <tr className="even:bg-primary-100">
                {row.map((col) => (
                  <td className="text-center p-8">{col}</td>
                ))}
              </tr>
            );
          })}
        </table>
      </div>
    </Card>
  );
};
export default TestSegment;
