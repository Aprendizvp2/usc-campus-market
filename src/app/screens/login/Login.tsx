import { Button, Hidden, IconButton, TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logoBlue from "../../assets/logo/logo-blue.png";
import logo from "../../assets/logo/logo.png";
import Alert from "../../components/alert/Alert";
import { ErrorIcon, SuccessCheckIcon } from "../../assets/svg";
import { useActions } from "./useActions";
import { Controller } from "react-hook-form";

export const LogIn = () => {
  const {
    control,
    isValid,
    errors,
    isVisible,
    openAlert,
    errorAlert,
    setOpenAlert,
    signIn,
    toggleVisibility,
    closeAlert,
    closeErrorAlert,
  } = useActions();

  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <Hidden mdDown>
          <div className="w-full md:w-1/2 pt-52">
            <div className="flex flex-col justify-center items-center w-ful">
              <h1 className="text-black text-5xl text-center font-bold px-20">
                Iniciar sesión
              </h1>
              <div className="flex justify-center items-center flex-col px-28 py-10 w-full gap-4">
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      {...field}
                      placeholder="Correo Electrónico"
                      fullWidth
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      {...field}
                      placeholder="Contraseña"
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      type={isVisible ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={toggleVisibility}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {isVisible ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        ),
                      }}
                      fullWidth
                    />
                  )}
                />

                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] px-10 py-2 rounded-lg text-xl text-white normal-case"
                  variant="outlined"
                  onClick={signIn}
                >
                  Ingresar
                </Button>
                <h1 className="text-black pt-4">
                  ¿No tienes una cuenta?{" "}
                  <a className="underline text-[#0074D9]" href="/signUp">
                    Registrarse
                  </a>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-screen bg-[#0074D9] pt-32">
            <div className="flex flex-col justify-center items-center w-full">
              <img alt="logo" src={logo} />
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
                <Controller
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      {...field}
                      placeholder="Correo Electrónico"
                      fullWidth
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="password"
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      {...field}
                      placeholder="Contraseña"
                      type={isVisible ? "text" : "password"}
                      InputProps={{
                        endAdornment: (
                          <IconButton
                            onClick={toggleVisibility}
                            // onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {isVisible ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        ),
                      }}
                      fullWidth
                    />
                  )}
                />
                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] py-2 rounded-lg text-xl text-white normal-case sm:w-1/2  w-full"
                  variant="outlined"
                  onClick={signIn}
                >
                  Ingresar
                </Button>
                <h1 className="text-black pt-4">
                  ¿No tienes una cuenta?{" "}
                  <a className="underline text-[#0074D9]" href="/signUp">
                    Registrarse
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </Hidden>
      </div>
      <Alert
        open={openAlert}
        onClick={closeAlert}
        labelText="¡Te has registrado con éxito!"
        labelButton="Ir a el inicio"
        icon={<SuccessCheckIcon />}
      />
      <Alert
        open={errorAlert.open}
        onClick={closeErrorAlert}
        labelText={`¡Ha ocurrido un error, ${errorAlert.error}, vuelve a intentar!`}
        labelButton="Cerrar"
        icon={<ErrorIcon />}
      />
    </div>
  );
};
