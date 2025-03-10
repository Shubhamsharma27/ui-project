import Avatar from "../../assets/Avatars/Avatar.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft,
// } from "@fortawesome/free-solid-svg-icons";

// ----------------------------------TESTIMONIAL---------------------------------------------

function Testimonial() {
  return (
    <div className="bg-orange-400 flex items-center justify-center min-h-screen m-8">
      <div className="text-center text-white max-w-2xl mx-auto p-6">
        <p className="text-sm mb-4">Take it from a Customer</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          “Beautifully showcases our best videos...”
        </h1>
        <div className="flex justify-center mb-6">
          <img
            src={Avatar}
            alt="A person giving a speech at a podium"
            className="rounded-full w-24 h-24"
            width="100"
            height="100"
          />
        </div>
        <p className="text-lg mb-6">
          “Media+ has created our own 'UNI-FLIX.' It's exactly the OTT platform
          I’ve been looking for. It beautifully showcases relevant videos for
          students, sorted by courses, locations, universities, and more—all in
          a matter of minutes. Plus, I can create the sections I want for our
          audience.”
        </p>
        <p className="font-bold mb-1">Girish C. Ballolla</p>
        <p className="mb-6">Founder &amp; CEO, Gen Next Education, Inc.</p>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <button className="text-2xl">
            {/* <FontAwesomeIcon icon={faChevronLeft} /> */}
          </button>
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          </div>
          <button className="text-2xl">
            {/* <FontAwesomeIcon icon={faChevronRight} /> */}
          </button>
        </div>
        <button className="bg-white text-orange-500 py-2 px-4 rounded-full">
          Request a Demo
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
