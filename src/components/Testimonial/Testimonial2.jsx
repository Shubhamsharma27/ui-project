import Avatar from "../../assets/Avatars/Avatar2.png";

// ------------------------------TESTIMONIAL-2---------------------------------------------
function Testimonial2() {
  return (
    <div className="bg-orange-400 flex items-center justify-center min-h-screen m-8">
      <div className="text-center text-white max-w-2xl mx-auto p-6">
        <p className="text-sm mb-4">Take it from a Customer</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          “A tool that can make it easy to manage our videos with AI...”
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
          “For the marketers &amp; go-to-market teams this is a great portal.
          This feels more like a tool that can make it easy to manage our videos
          with AI and feels like a part of our own website.”
        </p>
        <p className="font-bold mb-1">Jenifer Ho</p>
        <p className="mb-6">VP of Marketing, Bitwarden</p>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          </div>
          <button className="text-2xl">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        <button className="bg-white text-orange-500 py-2 px-4 rounded-full">
          Request a Demo
        </button>
      </div>
    </div>
  );
}

export default Testimonial2;
