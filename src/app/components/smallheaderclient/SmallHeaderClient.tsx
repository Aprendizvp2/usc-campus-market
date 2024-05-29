import { useState } from "react";
import { AppBar, IconButton } from "@mui/material";
import logo from "../../assets/logo/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import MenuDrawerClient from "../menudrawerclient/MenuDrawerClient";

export default function SmallHeaderClient() {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  const handleOpenMenuDrawerClient = (): void => {
    setOpenMenuDrawer(!openMenuDrawer);
  };

  return (
    <AppBar className="px-8 md:px-10 py-4" position="absolute">
      <div className="flex justify-between  bg-[#0074D9]  items-center">
        <a href="/home-client">
          <img className="w-16" src={logo} alt="logo" />
        </a>
        <div>
          <MenuDrawerClient
            open={openMenuDrawer}
            toggleMenuDrawerClient={handleOpenMenuDrawerClient}
          />
          <IconButton onClick={handleOpenMenuDrawerClient}>
            <MenuIcon sx={{ color: "white", width: 35, height: 35 }} />
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
}
