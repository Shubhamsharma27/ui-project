import Avatar from "../../assets/Avatars/Avatar4.png";

// ---------------------------------------TESTIMONIAL4---------------------------------------------------

function Testimonial4() {
  return (
    <div className="bg-orange-400 flex items-center justify-center min-h-screen m-8">
      <div className="text-center text-white max-w-2xl mx-auto p-6">
        <p className="text-sm mb-4">Take it from a Customer</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          “A tool that makes it easy to manage our videos...”
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
          “We do webinars twice or once a week. This works for us because we
          don’t have to download our recordings and upload them on our Webinars
          Page again and again. This helps us save time and effort as we can
          bring our webinars from Hubilo to Media+ seamlessly”
        </p>
        <p className="font-bold mb-1">Jule Hiller</p>
        <p className="mb-6">Senior Marketing Manager, EQS Group</p>
        <div className="flex justify-center items-center space-x-4 mb-6">
          <button className="text-2xl">
            <i className="fas fa-chevron-left"></i>
          </button>
          <div className="flex space-x-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
          </div>
        </div>
        <button className="bg-white text-orange-500 py-2 px-4 rounded-full">
          Request a Demo
        </button>
      </div>
    </div>
  );
}

export default Testimonial4;
