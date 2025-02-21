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
    <div className="text-xs w-[769.13385827px] h-[396.8503937px] border">
        <div className="flex h-[19px] mt-[143.6220472406px]">
          <p className="pl-[604.72440945px] w-[143.62204724px]">{data[1]?.[CR_Date]}</p>
        </div>
        <div className="flex justify-between h-[19px] mt-[37.7952755906px]">
          <p className="pl-[313.7007874px]">{data[1]?.[CR_Name]}</p>
          <p className="mr-[68px]">{data[1]?.[CR_TIN]}</p>
        </div>
        <div className="flex h-[19px] mt-[18.897637795px]">
          <p className="ml-[272.12598425px]">{data[1]?.[CR_Address]}</p>
        </div>
        <div className="flex h-[19px] mt-[18.897637795px]">
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
  );
};

export default HondaDESSize;
