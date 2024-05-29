import { AppBar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { LOGO_TYPE } from "../../assets/logo";
import { useAuthProvider } from "../../../context";

function Header() {
  const { handleSignOut } = useAuthProvider();

  return (
    <AppBar
      className="px-10 py-2 bg-[#0074D9] text-white"
      position="fixed"
      color="transparent"
    >
      <div className="flex justify-between items-center">
        <a href="/home">
          <img src={LOGO_TYPE} className="w-52" alt="icon" />
        </a>
        <div className="flex justify-center items-center">
          <Link
            className="text-white hover:text-[#0074D9] hover:bg-white px-4 py-2 mx-2 rounded text-lg font-semibold transition duration-300 ease-in-out"
            to="/home"
          >
            Inicio
          </Link>
          <Link
            className="text-white hover:text-[#0074D9] hover:bg-white px-4 py-2 mx-2 rounded text-lg font-semibold transition duration-300 ease-in-out"
            to="/products"
          >
            Productos
          </Link>
          <Link
            className="text-white hover:text-[#0074D9] hover:bg-white px-4 py-2 mx-2 rounded text-lg font-semibold transition duration-300 ease-in-out"
            to="/profile"
          >
            Perfil
          </Link>
          <IconButton className="mx-4" onClick={handleSignOut}>
            <LogoutIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}

export default Header;
