import GenNext from "../../assets/PartnersLogos/GenNext.png";
import Agora from "../../assets/PartnersLogos/Agora.png";
import Azuga from "../../assets/PartnersLogos/azuga.png";
import Ignition from "../../assets/PartnersLogos/ignition.png";
import Ens from "../../assets/PartnersLogos/ens.png";

const Partners = () => {
  return (
    <>
      <div className="text-center bg-orange-400 ">
        <p className=" p-5 mb-5 mt-40 text-white text-2xl ">Perfected by</p>
        <div className="bg-orange-400 text-white m-2 flex items-center justify-center gap-56 h-56 w-full pb-30">
          <img src={GenNext} height="120" width="120" />
          <img src={Agora} height="120" width="120" />
          <img src={Azuga} height="120" width="120" />
          <img src={Ignition} height="120" width="120" />
          <img src={Ens} height="120" width="120" />
        </div>
      </div>
    </>
  );
};

export default Partners;
