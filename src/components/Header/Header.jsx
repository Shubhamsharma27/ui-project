import { useState, useEffect } from "react";
import Web from "../../assets/webinar.png";

function Header() {
  const words = ["Engage 😆", "Optimize 😎 ", "$$$ 🤑"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className=" flex items-center justify-center min-h-screen m-24">
        <div className="text-center text-black">
          <h1 className="text-3xl md:text-5xl font-semibold mb-4">
            Unlock video’s full potential;
          </h1>
          <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-orange-500">
            half of marketers haven’t yet!
          </h1>
          <div className="flex items-center justify-center mb-4">
            <div className="border-2 border-orange-500 text-orange-500 px-4 py-2 rounded-xl text-2xl bold mr-2">
              Media+
            </div>
            <div className="text-4xl">=</div>
            <div className="text-4xl ml-2 ">{words[index]}</div>
          </div>
          <p className="text-gray-500 mb-6">
            Netflix-style video discovery for your prospects that turns viewers
            into customers
          </p>
          <button className="bg-orange-300 text-white px-6 py-2 rounded-md text-lg md:text-xl hover:bg-orange-500">
            Request a Demo
          </button>
          <div className="flex items-center justify-center min-h-screen p-16 m-2 ">
            <img src={Web} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
