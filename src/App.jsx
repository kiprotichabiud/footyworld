import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Updates from './components/Updates';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/home" element={<HeroSection />} />
        <Route path="/matches" element={<FeatureSection />} />
        <Route path="/teams" element={<FeatureSection />} />
        <Route path="/news" element={<FeatureSection />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/updates" element={<Updates/>} />
      </Routes>
    </Router>
  );
};

export default App;
