import { Route, Routes } from "react-router-dom";
import Login from "./screens/login/Login";
import SignUp from "./screens/signup/SignUp";
import Products from "./screens/products/Products";
import Profile from "./screens/profile/Profile";
import Home from "./screens/home/Home";
import ProductsClient from "./screens/products/ProductsClient";
import HomeClient from "./screens/home/HomeClient";
import LoginTwo from "./screens/login/LoginTwo";
import SignUpTwo from "./screens/signup/SignUpTwo";
import ProfileAdmin from "./screens/profile/ProfileAdmin";
import ProfileClient from "./screens/profile/ProfileClient";
import HomeAdmin from "./screens/home/HomeAdmin";
import ProductsAdmin from "./screens/products/ProductsAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<LoginTwo />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signupTwo" element={<SignUpTwo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home-client" element={<HomeClient />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
        <Route path="/products-admin" element={<ProductsAdmin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products-client" element={<ProductsClient />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile-client" element={<ProfileClient />} />
        <Route path="/profile-admin" element={<ProfileAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
