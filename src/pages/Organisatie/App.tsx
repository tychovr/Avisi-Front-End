import "./index.scss";
import Navbar from "./components/navbar/Navbar";
import SuperUserViewPost from "./views/SuperUserViewPost/SuperUserViewPost";
import Admininstantie from "./views/admininstantie/Admininstantie";
import Instanties from "./views/instanties/Instanties";
import GeavanceerdeInstanties from "./views/geavanceerdeInstanties/GeavanceerdeInstanties";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/geavanceerdeinstanties"
            element={<GeavanceerdeInstanties />}
          ></Route>
          <Route path="/admininstantie" element={<Admininstantie />}></Route>
          <Route path="/instanties" element={<Instanties />}></Route>
          <Route path="/home" element={<SuperUserViewPost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
