import { Hidden, TextField } from "@mui/material";
import logo from "../../assets/logo/logo.png";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <Hidden mdDown>
          <div className="w-full md:w-1/2 pt-52">
            <div className="flex flex-col justify-center items-center w-ful">
              <h1 className="text-black text-5xl text-center font-bold px-20">
                Iniciar sesion
              </h1>
              <div className="px-10 py-10 w-full">
                <TextField
                  sx={{ marginBottom: 2 }}
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-screen bg-[#0074D9] pt-52">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-white text-5xl text-center font-bold px-20">
                Bienvenido a USC Campus Market
              </h1>
              <img
                className="w-[150px] sm:w-[350px] h-[150px] sm:h-[350px]"
                alt="logo"
                src={logo}
              />
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="w-full pt-52">
            <div className="flex flex-col justify-center items-center w-ful">
              <h1 className="text-black text-5xl text-center font-bold px-20">
                Iniciar sesion
              </h1>
              <div className="px-10 py-10 w-full">
                <TextField
                  sx={{ marginBottom: 2 }}
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                />
              </div>
            </div>
          </div>
        </Hidden>
      </div>
    </div>
  );
}
