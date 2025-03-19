import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Updates from './components/Updates';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Layout component that includes Navbar and Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HeroSection />
              <About />
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <HeroSection />
              <About />
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/matches"
          element={
            <Layout>
              <FeatureSection />
            </Layout>
          }
        />
        <Route
          path="/teams"
          element={
            <Layout>
              <FeatureSection />
            </Layout>
          }
        />
        <Route
          path="/news"
          element={
            <Layout>
              <FeatureSection />
            </Layout>
          }
        />
        <Route
          path="/signin"
          element={
            <Layout>
              <SignIn />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <SignUp />
            </Layout>
          }
        />
        <Route
          path="/updates"
          element={
            <Layout>
              <Updates />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;  