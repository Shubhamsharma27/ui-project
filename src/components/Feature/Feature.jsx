import FeatureImg from "../../assets/Media/4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
// import React ,{ useState } from 'react';

// function ToggleButton() {
//   const [PlusButton, setPlusButton] = useState('+');
//   const [MinusButton, setMinusButton] = useState('-');

//   const handlePlusButtonClick = () => {
//     setPlusButton(prevState => (prevState === '+' ? '-' : '+'));
//   };

//   const handleMinusButtonClick = () => {
//     setMinusButton(prevState => (prevState === '-' ? '+' : '-'));
//   };

//   handlePlusButtonClick()
//   handleMinusButtonClick()

const Feature = () => {
  return (
    <div className="bg-white text-black">
      <div className="text-center py-8">
        <h2 className="text-orange-500 text-lg">Why choose Media+?</h2>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">
          Media+ turns video engagement into customer conversions
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 px-4">
        <div className="flex flex-col space-y-4">
          <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-80">
            <p className="font-semibold items-center flex justify-center">
              Curate your video media collection with an AI powered library
              <FontAwesomeIcon icon={faPlus} />
              {/* <FontAwesomeIcon icon={faMinus} /> */}
            </p>
          </div>
          <div className="bg-gray-100 text-black rounded-lg p-6 shadow-lg w-full md:w-80">
            <p className="font-semibold text-black">
              Build, Brand &amp; Publish your Media+
            </p>
            <p className="mt-2">
              Publish your on-demand media faster than ever using Media+. Add
              your custom branding and host all your media on your website or
              any other custom URL of your choice.
              <FontAwesomeIcon icon={faPlus} />
              {/* <FontAwesomeIcon icon={faMinus} /> */}
            </p>
          </div>
          <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-80">
            <p className="font-semibold items-center flex justify-center">
              Gate your media, capture leads &amp; connect your CRM - it’s easy
              <FontAwesomeIcon icon={faPlus} />
              {/* <FontAwesomeIcon icon={faMinus} /> */}
            </p>
          </div>
          <div className="bg-white text-black rounded-lg p-6 shadow-lg w-full md:w-80">
            <p className="font-semibold items-center flex justify-center">
              Track your views - with detailed analytics.
              <FontAwesomeIcon icon={faPlus} />
              {/* <FontAwesomeIcon icon={faMinus} /> */}
            </p>
          </div>
        </div>
        <div className="bg-gray-200 rounded-lg p-6 shadow-lg w-full md:w-1/2">
          <img
            src={FeatureImg}
            alt="Screenshot of Media+ platform with various customization options and analytics tools"
            className="rounded-lg"
            width="600"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
