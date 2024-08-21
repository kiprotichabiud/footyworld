import { Link } from "react-router-dom";

const LearnMore = () => {
  return (
    <div className="container mx-auto py-20 px-6 lg:px-20">
      <h1 className="text-4xl lg:text-6xl font-bold text-center mb-10">
        Learn More About <span className="text-green-700">FootballWorld</span>
      </h1>
      <p className="text-lg text-center text-neutral-500 max-w-3xl mx-auto mb-12">
        Discover the unique features that make FootyLive your go-to destination
        for football updates, insights, and community engagement.
      </p>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">1. Real-Time Match Updates</h2>
        <p className="text-md text-neutral-500 mb-4">
          Never miss a moment with live scores, minute-by-minute commentary, and detailed stats from leagues worldwide. Stay in the loop with instant notifications and interactive commentary for all your favorite matches.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">2. Interactive Match Simulations</h2>
        <p className="text-md text-neutral-500 mb-4">
          Predict match outcomes using advanced algorithms based on real-time data. Experience visualized simulations of the game in progress, giving you key insights before kickoff.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">3. Personalized Dashboard</h2>
        <p className="text-md text-neutral-500 mb-4">
          Customize your experience with a personalized dashboard that shows your favorite teams, players, and leagues. Get the latest news, updates, and exclusive content tailored just for you.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">4. In-Depth Analytics and Insights</h2>
        <p className="text-md text-neutral-500 mb-4">
          Analyze player and team performance with advanced stats, heatmaps, and tactical breakdowns. Our insights help you understand the game at a deeper level.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">5. Fan Engagement Hub</h2>
        <p className="text-md text-neutral-500 mb-4">
          Engage with fellow fans through live match discussions, polls, and shared predictions. Join our community of football lovers and make your voice heard.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">6. Betting Insights</h2>
        <p className="text-md text-neutral-500 mb-4">
          Get expert betting tips, odds comparisons, and predictions that help you make informed betting decisions. We provide data-driven insights for all your betting needs.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">7. Player & Team Progress Tracker</h2>
        <p className="text-md text-neutral-500 mb-4">
          Track the progress of your favorite teams and players with detailed stats and charts. Follow their performance across the season and stay updated on their achievements.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">8. Exclusive Interviews and Content</h2>
        <p className="text-md text-neutral-500 mb-4">
          Watch exclusive interviews with top footballers, managers, and personalities. Get behind-the-scenes footage from training grounds, locker rooms, and more.
        </p>
      </section>

      <div className="flex justify-center mt-10">
        <Link
          to="/signup"
          className="bg-gradient-to-r from-green-500 to-green-800 py-3 px-4 mx-3 rounded-md text-white"
        >
          Join FootyLive Now
        </Link>
      </div>
    </div>
  );
};

export default LearnMore;
