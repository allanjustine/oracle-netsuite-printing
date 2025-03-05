"use client";
import { PrintPageProps } from "@/types/types";

const HDCarmenCebu: React.FC<PrintPageProps> = ({ data }) => {
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
    <div className="text-xs w-[769.13385827px] h-[396.8503937px]">
      <div className="flex mt-[100.1732283431px]">
        <p className="pl-[604.72440945px] w-[143.62204724px]">
          {data[1]?.[CR_Date] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex justify-between  mt-[19.7952755906px]">
        <div className="w-[566.92913386px]">
          <p className="pl-[313.7007874px]">
            {data[1]?.[CR_Name] || <span className="opacity-0">No data</span>}
          </p>
        </div>
        <div className="w-[202.58267717px]">
          <p className="pl-[37.795275591px]">
            {data[1]?.[CR_TIN] || <span className="opacity-0">No data</span>}
          </p>
        </div>
      </div>
      <div className="flex mt-[9.8267716539px]">
        <p className="pl-[302.36220472px]">
          {data[1]?.[CR_Address] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      <div className="flex mt-[6.8267716539px]">
        <p className="ml-[294.80314961px]">
          {data[1]?.[CR_BusinessStyle] || (
            <span className="opacity-0">No data</span>
          )}
        </p>
      </div>
      <div className="flex w-full mt-[3.8267716539px]">
        <div className="w-[604.72440945px]">
          <p className="pl-[234.33070866px]">
            {data[1]?.[CR_AmountInWords] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
        <div className="w-[164.40944882px]">
          <p className="pl-[45.354330709px]">
            {data[1]?.[CR_AmountInFigures] || (
              <span className="opacity-0">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="w-[529px] pl-[340.15748031px] mt-[6.8267716539px]">
        <p>
          {data[1]?.[CR_Memo] || <span className="opacity-0">No data</span>}
        </p>
      </div>
      
      <div className="w-[769.13385827px] pl-[566.92913386px] mt-[45.7952755906px] text-[11px]">
        <p>
        {data[1]?.[CR_PartnerName]}
        </p>
      </div>
    </div>
  );
};

export default HDCarmenCebu;
