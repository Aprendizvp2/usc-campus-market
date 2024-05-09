import { Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";
import SignUp from "./screens/signup/SignUp";
import Products from "./screens/products/Products";
import Home from "./screens/home/Home";
import Profile from "./screens/profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
