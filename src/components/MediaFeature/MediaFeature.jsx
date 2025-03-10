import React from "react";
import MediaFeatureImg from "../../assets/Media.png";
import Icon1 from "../../assets/FeatureLogos/Icon1.png";
import Icon2 from "../../assets/FeatureLogos/Icon2.png";
import Icon3 from "../../assets/FeatureLogos/Icon3.png";
import Icon4 from "../../assets/FeatureLogos/Icon4.png";
import Icon5 from "../../assets/FeatureLogos/Icon5.png";
import Icon6 from "../../assets/FeatureLogos/Icon6.png";
import Check from "../../assets/FeatureLogos/Check.png";

const MediaFeature = () => {
  return (
    <div className="">
      <div className="text-center py-8">
        <h1 className="text-orange-500 text-lg">Explore</h1>
        <h2 className="text-4xl font-bold">Media+ Features</h2>
      </div>

      <div>
        <img src={MediaFeatureImg} alt="" />
      </div>
      <div className="bg-white pb-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4 ">
            <div className="flex items-center">
              <img src={Icon1} />
              <h3 className="text-black font-bold mb-2 ml-3">Media Library</h3>
            </div>
            <ul className="text-gray-700 text-sm">
              <li>
                <img src={Check} />
                25 video uploads included, 1 Media site with options to add more
              </li>
              <li>
                <img src={Check} />
                Upload videos directly from your computer
              </li>
              <li>
                <img src={Check} />
                Import past event recordings in a few clicks
              </li>
              <li>
                <img src={Check} />
                Effortlessly set up new events or import details
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 ml-3">
            <div className="flex items-center">
              <img src={Icon2} />
              <h3 className="text-black font-bold mb-2">Automated process</h3>
            </div>
            <ul className="text-gray-700 text-sm">
              <li>
                <img src={Check} />
                AI-generated metadata
              </li>
              <li>
                <img src={Check} />
                AI-generated thumbnails, transcripts & speaker lists
              </li>
              <li>
                <img src={Check} />
                AI-generated tags by category & audience
              </li>
              <li>
                <img src={Check} />
                Auto-transfer videos from Hubilo webinars & digital events to
                Media+
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 ml-3">
            <div className="flex items-center">
              <img src={Icon3} />
              <h3 className="text-black font-bold mb-2">
                Branding & Personalization
              </h3>
            </div>
            <ul className="text-black text-sm">
              <li>
                <img src={Check} />
                Use your logo and accent color; choose light or dark themes
              </li>
              <li>
                <img src={Check} />
                Create a unique media site URL with your own domain
              </li>
              <li>
                <img src={Check} />
                Use preference forms to deliver tailored content to your
                audience
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 ml-3">
            <div className="flex items-center">
              <img src={Icon4} />
              <h3 className="text-black font-bold mb-2">Video player</h3>
            </div>
            <ul className="text-gray-700 text-sm ml-3">
              <li className="flex items-center">
                <img src={Check} />
                Top video quality with descriptions, speaker info, and
                recommendations
              </li>
              <li>
                <img src={Check} />
                Integrated CTAs for better engagement
              </li>
              <li>
                <img src={Check} />
                Ask questions and share content easily
              </li>
              <li>
                <img src={Check} />
                Navigate through video chapters seamlessly
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 ml-3">
            <div className="flex items-center">
              <img src={Icon5} />
              <h3 className="text-black font-bold mb-2">Deep analytics</h3>
            </div>
            <ul className="text-gray-700 text-sm">
              <li>
                <img src={Check} />
                Comprehensive analytics on your media engagement
              </li>
              <li>
                <img src={Check} />
                Video level analytics
              </li>
              <li>
                <img src={Check} />
                Audience level analytics
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 ml-3">
            <div className="flex items-center">
              <img src={Icon6} />
              <h3 className="text-black font-bold mb-2">Boost your pipeline</h3>
            </div>
            <ul className="text-gray-700 text-sm">
              <li>
                <img src={Check} />
                CTAs linked to MAP/CRM
              </li>
              <li>
                <img src={Check} />
                Gate your content with forms
              </li>
              <li>
                <img src={Check} />
                Capture pipeline and engagement data via CRM (HubSpot)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaFeature;
