import { AppBar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import logoType from "../../assets/logo/logo-type.png";

function HeaderClient() {
  return (
    <AppBar
      className="px-10 py-2 bg-[#0074D9] text-white"
      position="fixed"
      color="transparent"
    >
      <div className="flex justify-between items-center">
        <a href="/home-client">
          <img src={logoType} className="w-52" alt="icon" />
        </a>
        <div className="flex justify-center items-center">
          <Link
            className="text-white hover:text-[#0074D9] hover:bg-white px-4 py-2 mx-2 rounded text-lg font-semibold transition duration-300 ease-in-out"
            to="/home-client"
          >
            Inicio
          </Link>
          <Link
            className="text-white hover:text-[#0074D9] hover:bg-white px-4 py-2 mx-2 rounded text-lg font-semibold transition duration-300 ease-in-out"
            to="/products-client"
          >
            Productos
          </Link>
          <Link
            className="text-white hover:text-[#0074D9] hover:bg-white px-4 py-2 mx-2 rounded text-lg font-semibold transition duration-300 ease-in-out"
            to="/profile-client"
          >
            Perfil
          </Link>
          <IconButton className="mx-4" href="/login">
            <LogoutIcon sx={{ color: "#ffffff" }} />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}

export default HeaderClient;
