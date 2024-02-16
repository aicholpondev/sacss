import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router";
import Home from "./components/home/home";

function App() {
  return (
    <>

      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
