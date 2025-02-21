"use client";
import { PrintPageProps } from "@/types/types";

const HondaDESSize: React.FC<PrintPageProps> = ({ data }) => {

  const CR_Date = 0;
  const CR_Name = 1;
  const CR_TIN = 2;
  const CR_Address = 3;
  const CR_BusinessStyle = 4;
  const CR_AmountInFigures = 5;
  const CR_AmountInWords = 6;
  const CR_Memo = 7;
  const CR_FormOfPayment = 8;
  const CR_PartnerName = 9;

  return (
    <div className="text-sm flex justify-evenly w-[769.13385827px] h-[396.8503937px] px-[34.015748031px]">
      <div className="w-full mt-[105.82677165px]">
        <div className="flex w-full mx-[585.82677165px]">
          <p>{data[1]?.[CR_Date]}</p>
        </div>
        <div className="flex justify-between h-[19px] mt-[37.7952755906px]">
          <p className="ml-[283.46456693px]">{data[1]?.[CR_Name]}</p>
          <p className="mr-[68px]">{data[1]?.[CR_TIN]}</p>
        </div>
        <div className="h-[19px] mt-[18.897637795px]">
          <p className="ml-[272.12598425px]">{data[1]?.[CR_Address]}</p>
        </div>
        <div className="h-[19px] mt-[18.897637795px]">
          <p className="ml-[272.12598425px]">
            {data[1]?.[CR_BusinessStyle]}
          </p>
        </div>
        <div className="h-[19px] flex w-full mt-[18.897637795px]">
          <p className="w-[366.61417323px] ml-[188.9763779528px]">{data[1]?.[CR_AmountInWords]}</p>
          <p className="ml-[56.692913386px]">{data[1]?.[CR_AmountInFigures]}</p>
        </div>
        <div className="h-[19px] flex w-[529px] mt-[18.897637795px] ml-[188.9763779528px]">
          <p>{data[1]?.[CR_Memo]}</p>
        </div>
      </div>
    </div>
  );
};

export default HondaDESSize;
