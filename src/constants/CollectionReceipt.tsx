"use client";
import { useAuth } from "@/context/authcontext";
import { PrintPageProps } from "@/types/types";
import LuzonSize from "@/utils/collectionreceipt/not-recognized/LuzonSize";
import Size1Collection from "@/utils/collectionreceipt/not-recognized/size1";
import Size2Collection from "@/utils/collectionreceipt/not-recognized/size2";
import Size3Collection from "@/utils/collectionreceipt/not-recognized/size3";
import Size4Collection from "@/utils/collectionreceipt/not-recognized/size4";
import HondaDESSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/HondaDESSize";
import DAPSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/DAPSize";
import SmctCrSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/SmctCrSize";
import DsmCrSize from "@/utils/collectionreceipt/not-recognized/cr-sizes/DsmCrSize";
import DAPBalingasag from "@/utils/collectionreceipt/global/fdl/old/dap/DAPBalingasag";
import DAPIligan from "@/utils/collectionreceipt/global/fdl/old/dap/DAPIligan";
import DAPTubod from "@/utils/collectionreceipt/global/fdl/old/dap/DAPTubod";
import DSMBayugan from "@/utils/collectionreceipt/global/fdl/new/dsm/DSMBayugan";
import Consolacion from "@/utils/official-receipt/global/fdl/old/dsm/Consolacion";
import DSMNorzagaray from "@/utils/collectionreceipt/global/fdl/new/dsm/DSMNorzagaray";
import DAPSanMiguel from "@/utils/collectionreceipt/global/fdl/new/dap/DAPSanMiguel";
import Binan from "@/utils/collectionreceipt/global/fdl/old/smct/Binan";
import Argao from "@/utils/official-receipt/global/fdl/old/dsm/Argao";
import Alano from "@/utils/collectionreceipt/global/fdl/new/dap/Alano";
import Balangasan from "@/utils/collectionreceipt/global/obbus/old/dsm/Balangasan";
import Cambaro from "@/utils/official-receipt/global/fdl/old/dsm/Cambaro";
import CarmenCdo from "@/utils/collectionreceipt/global/obbus/old/dsm/CarmenCdo";
import Ipil from "@/utils/official-receipt/global/fdl/old/hd/Ipil";
import Sucabon from "@/utils/collectionreceipt/global/fdl/new/dap/Sucabon";
import MandaueMulti from "@/utils/official-receipt/global/ubbos/old/dsm/MandaueMulti";
import HDGeneralTrias from "@/utils/collectionreceipt/global/fdl/new/hd/HDGeneralTrias";
import HDSindangan from "@/utils/collectionreceipt/global/fdl/old/hd/HDSindangan";
import HDDipolog from "@/utils/collectionreceipt/global/fdl/old/hd/HDDipolog";
import HDCarmenCebu from "@/utils/collectionreceipt/global/fdl/old/hd/HDCarmenCebu";
import Cerilles from "@/utils/official-receipt/global/ubbos/old/dsm/Cerilles";
import Calape2 from "@/utils/official-receipt/global/fdl/old/smct/Calape2";
import CarmenCebu2 from "@/utils/official-receipt/global/ajd/old/dsm/CarmenCebu2";
// import Argao from "@/utils/collectionreceipt/global/fdl/old/dsm/Argao";

const CollectionReceipt: React.FC<PrintPageProps> = ({ data }) => {
  const { user } = useAuth();

  const luzonSizeData = ["CARMO", "DASMA", "SLAP", "TANH"];

  const HondaDESSizeData = [
    "AURH",
    "BALAM",
    "BUUH",
    "CALIN",
    "CAMH",
    //"CARMC",
    "DATH",
    //"DSML",
    "GUSA",
    "PARD3",
    "TRINI",
    //"SDIP",
    "INAB",
    "KABA",
    "MARH",
    "OROH",
    "OROH2",
    //"SINDA",
    "SMCT",
    "VETH",
    "VILLA2",
  ];

  const DAPSizeData = [
    "AURD",
    "BUUD",
    "CALD",
    "CAMD",
    "IMED",
    "IPID",
    "SIND",
    "DAPI",
    "DIPD",
    "DIPD2",
    "INIT2",
    "JIME",
    "KABD",
    "LABD",
    "LILD",
    "MANO",
    "MARA2",
    "MARD",
    "MOLD",
    "NUND2",
    "OROD",
    "OZAD",
    "PUTD",
    "VITA",
  ];

  const smctCrSizeData = [
    "ALEN",
    "BANTA",
    "BAYB",
    "CALAP",
    "CALI",
    "CARMB",
    "CATAR",
    "FAMY",
    "GUIN",
    "JAGN",
    "BOHK",
    "LOAY",
    "MADRI",
    "MALA",
    "MANG",
    "NAIC",
    "PAGS",
    "SALA",
    "SANJ",
    "SANP",
    "SANT2",
    "SILA",
    "AKLA",
    "ANTIP",
    "CALAP2",
    "LIPA",
    "SROS",
    "TALI2",
    "TANZ",
    "TANZ2",
    "TRINI2",
    "VALEN",
    "YATI",
  ];

  const dsmCrSizeData = [
    "AURO",
    "BOGO",
    "BULU",
    "CALIN",
    "CARS",
    "CATAR2",
    "CATM",
    "COMPO",
    "CONSO",
    "DIGOS",
    "DONC",
    "CARCAR",
    "DSMB",
    "DSMBL",
    "DSMBN",
    "DSMCA",
    "DSMCN",
    "DSMCA",
    "DSMCN",
    "DSMD",
    "DSMD2",
    "DSMK",
    "DSMLN",
    "DSMPO",
    "DSMSB",
    "DSMSO",
    "DSMT2",
    "DSMTA",
    "DSMV",
    "ELSA",
    "ILIG",
    "ILOI",
    "JIMEDSM",
    "KABA2",
    "KATI",
    "LABA",
    "LAPU",
    "MARA",
    "MATI",
    "MEDE",
    "REMI",
    "RIZA",
    "SARG",
    "SLIL",
    "TACU",
    "TAGUM",
    "TOMAS",
    "TORI",
    "TUBU",
    "VILLA",
    "DSMBL",
  ];

  switch (true) {
    case luzonSizeData.some((branch) => branch === user?.branchCode):
      return <LuzonSize data={data} />;
    case HondaDESSizeData.some((branch) => branch === user?.branchCode):
      return <HondaDESSize data={data} />;
    case DAPSizeData.some((branch) => branch === user?.branchCode):
      return <DAPSize data={data} />;
    case smctCrSizeData.some((branch) => branch === user?.branchCode):
      return <SmctCrSize data={data} />;
    case dsmCrSizeData.some((branch) => branch === user?.branchCode):
      return <DsmCrSize data={data} />;
    case "BALD" === user?.branchCode:
      return <DAPBalingasag data={data} />;
    case "ILID" === user?.branchCode:
      return <DAPIligan data={data} />;
    case "TUBOD" === user?.branchCode:
      return <DAPTubod data={data} />;
    case "BAYU" === user?.branchCode:
      return <DSMBayugan data={data} />;
    case "DSMP" === user?.branchCode:
      return <Consolacion data={data} />;
    case "NORZA" === user?.branchCode:
      return <DSMNorzagaray data={data} />;
    case "SANM" === user?.branchCode:
      return <DAPSanMiguel data={data} />;
    case "BINAN" === user?.branchCode:
      return <Binan data={data} />;
    case "DSMAO" === user?.branchCode:
      return <Argao data={data} />;
    case "ALAD" === user?.branchCode:
      return <Alano data={data} />;
    case "BALA" === user?.branchCode:
      return <Balangasan data={data} />;
    case "DSMA" === user?.branchCode:
      return <Cambaro data={data} />;
    case "CARMCDO" === user?.branchCode:
      return <CarmenCdo data={data} />;
    case "IPIH" === user?.branchCode:
      return <Ipil data={data} />;
    case "SUCD" === user?.branchCode:
      return <Sucabon data={data} />;
    case "MAND" === user?.branchCode:
      return <MandaueMulti data={data} />;
    case "GENT" === user?.branchCode:
      return <HDGeneralTrias data={data} />;
    case "SINDA" === user?.branchCode:
      return <HDSindangan data={data} />;
    case "SDIP" === user?.branchCode:
      return <HDDipolog data={data} />;
    case "CARMC" === user?.branchCode:
    return <HDCarmenCebu data={data} />;
    case "CERI" === user?.branchCode:
      return <Cerilles data={data} />;
    case "CALAP2" === user?.branchCode:
      return <Calape2 data={data} />;
    case "CARMC2" === user?.branchCode:
      return <CarmenCebu2 data={data} />;
    default:
      return (
        <div className="text-center flex items-center justify-center h-screen font-bold text-lg">
          Sorry, This page is temporary unavailable on your branch
        </div>
      );
  }
};

export default CollectionReceipt;
