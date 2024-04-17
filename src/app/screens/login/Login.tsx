import { Button, Hidden, TextField } from "@mui/material";
import logoBlue from "../../assets/logo/logo-blue.png";
import logo from "../../assets/logo/logo.png";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <Hidden mdDown>
          <div className="w-full md:w-1/2 pt-52">
            <div className="flex flex-col justify-center items-center w-ful">
              <h1 className="text-black text-5xl text-center font-bold px-20">
                Iniciar sesión
              </h1>
              <div className="flex justify-center items-center flex-col px-28 py-10 w-full">
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  placeholder="Contraseña"
                  fullWidth
                />
                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] px-10 py-2 rounded-lg text-xl text-white normal-case"
                  variant="outlined"
                >
                  Ingresar
                </Button>
                <h1 className="text-black pt-4">
                  ¿No tienes una cuenta?{" "}
                  <a className="underline text-[#0074D9]" href="/signup">
                    Registrarse
                  </a>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-screen bg-[#0074D9] pt-32">
            <div className="flex flex-col justify-center items-center w-full">
              <img
                alt="logo"
                src={logo}
              />
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className="w-full pt-16">
            <div className="flex flex-col justify-center items-center w-ful">
              <img
                className="w-[200px] sm:w-[350px] h-[200px] sm:h-[350px]"
                alt="logo"
                src={logoBlue}
              />
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold px-20">
                Iniciar sesión
              </h1>
              <div className="flex justify-center items-center flex-col px-8 sm:px-28 py-10 w-full">
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  placeholder="Email"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  placeholder="Contraseña"
                  fullWidth
                />
                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] py-2 rounded-lg text-xl text-white normal-case sm:w-1/2  w-full"
                  variant="outlined"
                >
                  Ingresar
                </Button>
                <h1 className="text-black pt-4">
                  ¿No tienes una cuenta?{" "}
                  <a className="underline text-[#0074D9]" href="/signup">
                    Registrarse
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </Hidden>
      </div>
    </div>
  );
}
