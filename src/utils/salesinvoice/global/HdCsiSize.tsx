"use client";
import { PrintPageProps } from "@/types/types";
import FormattedNumber from "@/utils/FormattedNumber";
import FormattedSumTotal from "@/utils/FormattedSumTotal";

const HdCsiSizes = ({ data }: any) => {
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
    <div className="text-xs h-[771.02362205px] w-[593.38582677px]">
      <div className="flex h-[19.409448819px] mt-[118.6771653587px]">
        <p className="w-[376.06299213px] pl-[94.488188976px]">
          {data[1]?.[mainLineName] || ""}
        </p>
        <p className="w-[219.21259843px] pl-[60.472440945px]">
          {data[1]?.[date] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[376.06299213px] pl-[94.488188976px]">
          {data[1]?.[tinNumber] || ""}
        </p>
        <p className="w-[219.21259843px] pl-[60.472440945px]">
          {data[1]?.[terms] || ""}
        </p>
      </div>
      <div className="flex h-[38.818897638px]">
        <div className="w-[376.06299213px] pl-[94.488188976px]">
          <p className="h-[19.409448819px]">{data[1]?.[billingAddress].substring(0, 47) || ""}</p>
          <p className="h-[19.409448819px]">{data[1]?.[billingAddress].substring(47) || ""}</p>
        </div>
        <p className="w-[219.21259843px] pl-[136.06299213px]">
          {data[1]?.[oscaPwdIdNo] || ""}
        </p>
      </div>
      <div className="flex h-[19.409448819px]">
        <p className="w-[376.06299213px] pl-[137.95275591px]">
          {data[1]?.[businessStyle] || ""}
        </p>
        <p className="w-[219.21259843px] pl-[113.38582677px]">
          {data[1]?.[cardHolderSignatures] || ""}
        </p>
      </div>
      <div className="mx-[34.393700787px] mt-[23.4330708664px] h-[314.07874016px]">
        <table className="border-collapse w-full">
          <tbody>
            {data.slice(1, 17).map((row: any, index: number) => (
              <tr key={index} className="text-[10px] text-center">
                <td className="w-[71.811023622px]">{row[quantity]}</td>
                <td className="w-[62.362204724px] h-[19.275590551px]">
                  {row[unitOfMeasurement]}
                </td>
                <td
                  className={`w-[238.48818898px] h-[19.275590551px] ${
                    row[articles]?.length > 41 ? "text-[7px]" : ""
                  }`}
                >
                  {row[articles]}
                </td>
                <td className="w-[79.748031496px] h-[19.275590551px]">
                  {FormattedNumber(row[unitPrice])}
                </td>
                <td className="w-[102.38740157px] h-[19.275590551px]">
                  {FormattedNumber(row[totalAmount])}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mx-[34.393700787px] h-[126.99212598px]">
        <table className="border-collapse w-full">
          <tbody>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
                {/* {FormattedSumTotal(data, rateInclusiveVat, 16)} VAT EXEMPT SALES */}
                0.00
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 16)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
                {FormattedSumTotal(data, rateInclusiveVat, 16)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive2, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]">
                {FormattedSumTotal(data, vatAmount, 16)}
              </td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {/* {FormattedSumTotal(data, totalSalesVatInclusive2, 16)} LESS: SC/PWD DISCOUNT */}
                0.00
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount2, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, vatAmount3, 16)}
              </td>
            </tr>
            <tr className="text-[10px]">
              <td className="h-[19.275590551px] w-[131.90551181px]"></td>
              <td className="h-[19.275590551px] w-[185.57480315px] pl-[11.338582677px]"></td>
              <td className="h-[19.275590551px] w-[132.66141732px]"></td>
              <td className="h-[19.275590551px] w-[102.04724409px] text-center">
                {FormattedSumTotal(data, totalSalesVatInclusive, 16)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-[34.393700787px]">
        <div className="mt-[26.456692914px] ml-[332.976377952px]">
          <p className="text-[10px] text-center">
            {data[1]?.[cashier] || ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HdCsiSizes;
