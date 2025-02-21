"use client";
import { PrintPageProps } from "@/types/types";

const Size1Collection: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-sm flex justify-evenly w-[774px] h-[396px] px-[26px] border-2">
      <div className="w-[212px] mt-[37.7px] mr-[11px]">
        <table className="text-sm">
          <tbody>
            <tr>
              <td className="text-center h-[19px] w-[106px]">asd</td>
              <td className="text-center h-[19px] w-[106px]"></td>
            </tr>
            <tr className="h-[19px]"></tr>
            <tr className="h-[19px]">
              <td className="text-left w-[106px]"></td>
              <td className="text-center w-[106px]"></td>
            </tr>
            <tr className="h-[19px]">
              <td className="text-left w-[106px]"></td>
              <td className="text-center w-[106px]"></td>
            </tr>
            <tr className="h-[19px]">
              <td className="text-left w-[106px]"></td>
              <td className="text-center w-[106px]"></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full mt-[113px]">
        <div className="flex justify-end w-full mb-[18.8px]">
          <p>{data[1]?.[date]}</p>
        </div>
        <div className="flex justify-between h-[19px]">
          <p className="ml-[68px]">Noreen Angeleen Darunday</p>
          <p>TIN NUMBER 0186957</p>
        </div>
        <div className="h-[19px]">
          <p className="ml-[68px]">Poblacion, Corella, Bohol</p>
        </div>
        <div className="h-[19px]">
          <p className="ml-[68px]">
            Motorcycle installment for the year 2024 and so on vice versa
          </p>
        </div>
        <div className="h-[19px] flex w-[529px]">
          <p className="w-[378px]">One hundred thousand only</p>
          <p className="w-[151px] ml-[37.7px]">100,000</p>
        </div>
        <div className="h-[19px] flex w-[529px] pl-[113px]">
          <p>November 20, 2024 MC</p>
        </div>
        <div className="h-[19px] flex w-[529px]">
          <p>REF # 123456</p>
        </div>
      </div>
    </div>
  );
};

export default Size1Collection;
