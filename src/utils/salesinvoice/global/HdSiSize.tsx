"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const HdSiSize: React.FC<PrintPageProps> = ({ data }) => {
  const mainLineName = 0;
  const date = 1;
  const taxNumber = 2;
  const terms = 3;
  const billingAddress = 4;
  const oscaPwdIdNo = 5;
  const businessStyle = 6;
  const cardHolderSignatures = 7;
  const quantity = 8;
  const unitOfMeasurement = 9;
  const articles = 10;
  const rateInclusiveVat = 11;
  const totalAmount = 12;
  const totalSalesVatExclusive = 13;
  const vatAmount = 14;
  const totalSalesVatInclusive = 15;
  const vatAmount2 = 16;
  const totalSalesVatExclusive2 = 17;
  const totalSalesVatExclusive3 = 18;
  const vatAmount3 = 19;
  const totalSalesVatInclusive2 = 20;
  const serialNumber = 21;
  const chassisNumber = 22;
  const conductionSticker = 23;
  const tinNumber = 24;
  const cashier = 25;
  const unitPrice = 26;

  return (
    <div className="text-xs h-[755.90551181px] w-[578.26771654px]">
      <div className="flex h-[21.165354331px] mt-[117.7244094521px]">
        <p className="w-[377.95275591px] pl-[94.488188976px]">
          {data[1]?.[mainLineName] || "No data"}
        </p>
        <p className="w-[219.21259843px] pl-[62px]">
          {data[1]?.[date] || "No data"}
        </p>
      </div>
      <div className="flex h-[21.165354331px]">
        <p className="w-[377.95275591px] pl-[94.488188976px]">
          {data[1]?.[tinNumber] || "No data"}
        </p>
        <p className="w-[219.21259843px] pl-[62px]">
          {data[1]?.[terms] || "No data"}
        </p>
      </div>
      <div className="flex h-[21.165354331]">
        <p className={`w-full pl-[94.488188976px] ${data[1]?.[billingAddress]?.length > 90 ? 'text-[9px]' : ''}`}>
          {data[1]?.[billingAddress] || "No data"}
        </p>
      </div>
      <div className="flex h-[21.165354331px]">
        <p className="w-[377.95275591px] pl-[129px]">
          {data[1]?.[businessStyle] || "No data"}
        </p>
        <p className="w-[219.21259843px] pl-[87px]"></p>
      </div>
      <div className="mx-[30.236220472px] mt-[23.456692913px] h-[313.32283465px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row, index) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[71.433070866px]">{row[quantity]}</td>
                <td className="w-[56.31496063px] h-[18.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[231.30708661px] h-[18.275590551px] ${
                    row[articles]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.37007874px] h-[18.275590551px]">
                  {FormattedNumber(row[unitPrice])}
                </td>
                <td className="w-[101.66929134px] h-[18.275590551px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[30.236220472px] h-[135.68503937px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[18.275590551px] w-[145.50393701px]"></td>
              <td className="h-[18.275590551px] w-[176.52755906px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
              <td className="h-[18.275590551px] w-[129.25984252px]"></td>
              <td className="h-[18.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.275590551px] w-[145.50393701px]"></td>
              <td className="h-[18.275590551px] w-[176.52755906px]">0.00</td>
              <td className="h-[18.275590551px] w-[129.25984252px]"></td>
              <td className="h-[18.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, vatAmount2, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.275590551px] w-[145.50393701px]"></td>
              <td className="h-[18.275590551px] w-[176.52755906px]">
                {FormattedSumTotal(data, rateInclusiveVat, 16)}
              </td>
              <td className="h-[18.275590551px] w-[129.25984252px]"></td>
              <td className="h-[18.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.275590551px] w-[145.50393701px]"></td>
              <td className="h-[18.275590551px] w-[176.52755906px]">
                {FormattedSumTotal(data, vatAmount, 16)}
              </td>
              <td className="h-[18.275590551px] w-[129.25984252px]"></td>
              <td className="h-[18.275590551px] w-[98.645669291px] text-center"></td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.275590551px] w-[145.50393701px]"></td>
              <td className="h-[18.275590551px] w-[176.52755906px]"></td>
              <td className="h-[18.275590551px] w-[129.25984252px]"></td>
              <td className="h-[18.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, vatAmount2, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.275590551px] w-[145.50393701px]"></td>
              <td className="h-[18.275590551px] w-[176.52755906px]"></td>
              <td className="h-[18.275590551px] w-[129.25984252px]"></td>
              <td className="h-[18.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, vatAmount3, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[18.275590551px] w-[145.50393701px]"></td>
              <td className="h-[18.275590551px] w-[176.52755906px]"></td>
              <td className="h-[18.275590551px] w-[129.25984252px]"></td>
              <td className="h-[18.275590551px] w-[98.645669291px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[30.236220472px]">
        <div className="mt-[22.566929134px] ml-[392.31496063px]">
          <p className="text-[10px] text-center">
            {data[1]?.[cashier] || "Test Cashier"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HdSiSize;
