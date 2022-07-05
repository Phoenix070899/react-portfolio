import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <div className="container mx-auto max-w-[1024px] px-5">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
