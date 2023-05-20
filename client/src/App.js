import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import Navbar from "./pages/Navbar";
import Dasboard from "./pages/Dasboard/Dasboard";
import MainGalery from "./pages/CarGalery/MainGalery";
import Footer from "./pages/Footer";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/" element={<Dasboard />} />
            <Route path="/cars" element={<MainGalery />} />
          </Routes>
        </Router>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
