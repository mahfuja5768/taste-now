import Banner from "./components/Banner/Banner";
import GetToKnow from "./components/GetToKnow/GetToKnow";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import Footer from "./shared/Footer/Footer";
import Navbar from "./shared/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <PopularCategories/>
      <GetToKnow/>
      <Footer/>
    </div>
  );
};

export default App;