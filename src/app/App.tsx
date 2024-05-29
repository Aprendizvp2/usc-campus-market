import { Home, LogIn, Profile, Products, SignUp } from "../app/screens";
import { useAuthProvider } from "../context";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const { session } = useAuthProvider();
  return (
    <BrowserRouter>
      {session ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}
