import Navbar from "./components/Navbar/Navbar.component";
import AboutUs from "./container/AboutUs/AboutUs.container";
import Chef from "./container/Chef/Chef.container";
import FindUs from "./container/FindUs/FindUs.container";
import Footer from "./container/Footer/Footer.container";
import Gallery from "./container/Gallery/Gallery.container";
import Header from "./container/Header/Header.container";
import Intro from "./container/IntroVideo/IntroVideo.container";
import Laurels from "./container/Laurels/Laurels.container";
import SpecialMenu from "./container/Menu/SpecialMenu.container";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
