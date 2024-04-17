import { Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";
import SignUp from "./screens/SignUp/SignUp";
import { Home } from "./screens/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
