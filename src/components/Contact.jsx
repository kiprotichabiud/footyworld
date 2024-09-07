const Contact = () => {
  return (
    <div className="bg-green-900 p-6 m-3 rounded-lg text-center">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">Get the freshest FootballWorld news</h2>
        <form className="space-y-4 flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter email here"
            className="w-[300px] p-3 bg-transparent border-b-2 border-gray-300 rounded-none focus:outline-none focus:border-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-green-600 to-green-900 px-4 py-2 text-white rounded-lg mt-4"
          >
            Subscribe
          </button>
        </form>
        <nav className="mt-6 space-x-4 text-center">
          <a href="/home" className="text-white-600 hover:underline">Home</a>
          <a href="/matches" className="text-white-600 hover:underline">Matches</a>
          <a href="/teams" className="text-white-600 hover:underline">Teams</a>
          <a href="/news" className="text-white-600 hover:underline">News</a>
        </nav>
      </div>
      <div className="bg-black py-4 rounded-md">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-white">&copy; 2024 FootballWorld, LLC. All Rights Reserved.</p>
        
        </div>
      </div>
    </div>
  );
};

export default Contact;
