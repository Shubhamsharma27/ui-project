import ManImage from "../../assets/Man.png";

function ContactForm() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row items-center fade-in">
        <div className="md:w-1/2 text-center md:text-left slide-in">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            See how your videos can make your business
            <span className="text-orange-500"> more $$$</span>
          </h1>
          <img
            src={ManImage}
            alt="Smiling man pointing to the right"
            className="w-full h-auto rounded-lg"
            width="400"
            height="400"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 form-slide-in">
          <form className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">
              Take the Full Media+ Tour
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700">Business email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="johnsmith@hubilo.com"
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  defaultValue="John"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  defaultValue="Smith"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Company name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="Business Company Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                defaultValue="(201) 555-0123"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-orange-500"
                />
                <span className="ml-2 text-gray-700">
                  I agree to Hubilo’s
                  <a href="#" className="text-orange-500">
                    {" "}
                    Terms of Service
                  </a>{" "}
                  and
                  <a href="#" className="text-orange-500">
                    {" "}
                    Privacy Policy
                  </a>{" "}
                  which includes my consent to process my personal data.
                </span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Get a free demo
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
