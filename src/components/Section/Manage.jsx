const Manage = () => {
  return (
    <div className="bg-white text-center text-black min-h-screen flex flex-col items-center justify-center">
      <div className="py-10">
        <h1 className="text-orange-500 text-lg">Elevate your video strategy</h1>
        <h2 className="text-4xl font-bold mt-2">Seamless Video Management</h2>
        <p className="text-gray-400 mt-2">
          Transform how you engage with your audience using Media+
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 px-4">
        <div className="bg-orange-100 text-black rounded-lg p-6 w-full md:w-1/3">
          <h3 className="text-5xl text-orange-500 font-bold">2.5X</h3>
          <h4 className="text-2xl font-semibold mt-2">Lead Generation</h4>
          <p className="mt-2">Boost watch time and drive more leads</p>
        </div>
        <div className="bg-orange-100 text-black rounded-lg p-6 w-full md:w-1/3">
          <h3 className="text-5xl text-orange-500 font-bold">3X</h3>
          <h4 className="text-2xl font-semibold mt-2">
            Publish Content Faster with AI
          </h4>
          <p className="mt-2">Tailor made to get more views</p>
        </div>
        <div className="bg-orange-100 text-black rounded-lg p-6 w-full md:w-1/3">
          <h3 className="text-5xl text-orange-500 font-bold">30min</h3>
          <h4 className="text-2xl font-semibold mt-2">Setup</h4>
          <p className="mt-2">Set up your video CMS in less than 30 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default Manage;
