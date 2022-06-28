import "./App.css";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-screen">
      <div className="container mx-auto">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
