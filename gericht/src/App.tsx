import Navbar from "./components/Navbar/Navbar.component"
import AboutUs from "./container/AboutUs/AboutUs.container"
import Chef from "./container/Chef/Chef"
import Header from "./container/Header/Header.container"
import SpecialMenu from "./container/Menu/SpecialMenu.container"
function App() {

  return (
    <>
     <Navbar />
     <Header />
     <AboutUs />
     <SpecialMenu />
     <Chef />
    </>
  )
}

export default App
