import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />

          <Route path="register" element={<SignUp />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path='Home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
