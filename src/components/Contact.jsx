const Contact = () => {
    return (
      <div className=" bg-green-900 p-6 m-3 rounded-lg text-center">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">Get the freshest FootballWorld news</h2>
          <form className="space-y-4 flex-row">
            <input
              type="email"
              placeholder="Enter email here"
              className=" w-[300px] p-3 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className=" bg-black  px-2 text-white py-2 rounded-lg "
            >
              Subscribe 
            </button>
            <div className="flex items-center">
             
            </div>
          </form>
          <nav className="mt-6 space-x-4 text-center">
            <a href="/home" className="text-white-600 hover:underline">Home</a>
            <a href="/matches" className="text-white-600 hover:underline">Matches</a>
            <a href="/teams" className="text-white-600 hover:underline">Teams</a>

            <a href="/news" className="text-white-600 hover:underline">News</a>
            
          </nav>
        </div>
        <div className=" bg-black py-4 rounded-md">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-center text-white">&copy; 2024 FootballWorld, LLC. All Rights Reserved.</p>
            <nav className="mt-4 text-center space-x-4">
              <a href="/terms" className="text-white-600 hover:underline">Website Terms</a>
              <a href="/privacy" className="text-white-600 hover:underline">Privacy Policy</a>
              <a href="/do-not-sell" className="text-white-600 hover:underline">Do Not Sell or Share My Personal Information</a>
              <a href="/california-privacy" className="text-white-600 hover:underline">Kenya: Your Privacy Rights</a>
              <a href="/accessibility" className="text-white-600 hover:underline">Accessibility Statement</a>
              <a href="/ca-transparency" className="text-white-600 hover:underline">CA Transparency in Supply Chains Act</a>
              <a href="/supplier-code" className="text-white-600 hover:underline">Supplier Code of Conduct</a>
              <a href="/marketing-to-children" className="text-white-600 hover:underline">Marketing to Children</a>
            </nav>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  