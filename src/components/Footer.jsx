const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center p-4 ">
      <div className="mb-4 md:mb-0 md:flex-1 md:mr-4">
        <img
          className="w-full h-[400px] object-cover rounded-lg"
          src="https://plus.unsplash.com/premium_photo-1661763911173-f2f7becc70b0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29udGFjdCUyMHVzfGVufDB8fDB8fHww"
          alt="Contact"
        />
      </div>
      <div className="flex-1">
        <h1 className="font-extrabold text-2xl mb-4">Get in touch with Football World</h1>
        <form>
          <div className="mb-4">
            <label className="block text-lg mb-1" htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              className="w-[300px] p-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-1" htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className="w-[300px] p-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-1" htmlFor="contact">Contact:</label>
            <input
              id="contact"
              type="text"
              className="w-[300px] p-2 border border-gray-300 rounded-lg"
              placeholder="Your Contact Number"
            />
          </div>
          <button
            type="submit"
            className="w-[100px] bg-gradient-to-r from-green-400 to-green-900 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
