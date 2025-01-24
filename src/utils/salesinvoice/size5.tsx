"use client";
import { PrintPageProps } from "@/types/types";

const Size5Sales: React.FC<PrintPageProps> = ({ data }) => {
  const internalIdColumnIndex = 0;
  const mainLineName = 1;
  const billingAddress = 2;
  const billingAddress1 = 3;
  const billingAddress2 = 4;
  const billingAddress3 = 5;
  const taxNumber = 6;
  const date = 7;
  const terms = 8;
  const item = 9;
  const quantity = 10;
  const units = 11;
  const units1 = 12;
  const itemRate = 13;
  const itemRate1 = 14;
  const amount = 15;
  const totalSales = 16;
  const amountTax = 17;
  const netTax = 18;
  const transactionTotal = 19;

  return (
    <div className="text-xs h-[801.2px] w-[604.7px] border">
      <div className="flex h-[19.8px] mt-[153.2px]">
        <p className="w-[378px] pl-[95px]">Sold to No data</p>
        <p className="w-[223px] pl-[53px]">{data[date]?.[7]}</p>
      </div>
      <div className="flex h-[19.8px]">
        <p className="w-[378px] pl-[95px]">Tin No data</p>
        <p className="w-[223px] pl-[53px]">Terms</p>
      </div>
      <div className="flex h-[30]">
        <p className="w-[378px] pl-[95px]">Address</p>
        <p className="w-[223px] pl-[136px]">104</p>
      </div>
      <div className="flex h-[19.8px]">
        <p className="w-[378px] pl-[129px]">Business style</p>
        <p className="w-[223px] pl-[87px]"></p>
      </div>
      <div className="mx-[26.4px] mt-[24px] h-[298px] border">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 11).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[52.92px]">{row[10]}</td>
                <td className="w-[49.15px] h-[20px]">{row[11]}</td>
                <td
                  className={`w-[283.5px] h-[20px] ${
                    row[9]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[9]}
                </td>
                <td className="w-[71.83px] h-[20px]">{row[13]}</td>
                <td className="w-[98.28px] h-[20px]">{row[15]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[26.4px] h-[156px] border">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]"></td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center">PHP142,857.14</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]">PHP0.00</td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center">17,142.86</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]">PHP0.00</td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]">PHP17,142.86</td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]"></td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]"></td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]"></td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center">PHP160,000.00</td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[20px] w-[102.07px]"></td>
              <td className="h-[20px] w-[283.47px]"></td>
              <td className="h-[20px] w-[71.83px]"></td>
              <td className="h-[20px] w-[98.28px] text-center">PHP180,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Size5Sales;