import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./COMPONENT/Form";
import Home from "./COMPONENT/Home";
import Login from "./COMPONENT/Login";
import Submitpage from "./COMPONENT/Submitpage";
function App() {
  console.log("99");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login-page" element={<Login />}></Route>
          {/* <Route path="/Form-ui" element={<Form />}></Route> */}
          <Route path="Submitpage" element={<Submitpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
