import { Drawer, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/logo/logo-blue.png";
import LogoutIcon from "@mui/icons-material/Logout";

interface MenuDrawerAdminProps {
  open: boolean;
  toggleMenuDrawerAdmin: () => void;
}

export default function MenuDrawerAdmin({
  open,
  toggleMenuDrawerAdmin,
}: MenuDrawerAdminProps) {
  return (
    <Drawer anchor="right" open={open} onClick={toggleMenuDrawerAdmin}>
      <Paper
        sx={{
          width: 320,
          height: "100%",
          borderRadius: 0,
          padding: "8px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img style={{ width: 90 }} src={logo} alt="logo" />
          <IconButton onClick={toggleMenuDrawerAdmin}>
            <CloseIcon sx={{ color: "black", width: 35, height: 35 }} />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 20,
          }}
        >
          <a
            style={{
              color: "black",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
            href="/home-admin"
          >
            Inicio
          </a>
          <a
            style={{
              color: "black",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
            href="/products-admin"
          >
            Productos
          </a>
          <a
            style={{
              color: "black",
              marginTop: 20,
              fontSize: 20,
              fontWeight: "bold",
            }}
            href="/profile-admin"
          >
            Perfil
          </a>
          <IconButton className="mx-4" href="/login">
            <LogoutIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
      </Paper>
    </Drawer>
  );
}
