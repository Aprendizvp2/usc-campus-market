import {
  Button,
  Hidden,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ErrorIcon, SuccessCheckIcon } from "../../assets/svg";
import Alert from "../../components/alert/Alert";
import { useActions } from "./useActions";
import { userRoles } from "../../../types/user";
import { Controller } from "react-hook-form";
import { LOGO } from "../../assets/logo";
export const SignUp = () => {
  const {
    control,
    isValid,
    errors,
    error,
    isVisible,
    openAlert,
    openErrorAlert,
    setOpenAlert,
    setOpenErrorAlert,
    signUp,
    toggleVisibility,
    onClickGoToLogin,
    closeErrorAlert,
  } = useActions();

  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <Hidden mdDown>
          <div className="w-full md:w-1/2 pt-28">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-black text-5xl text-center font-bold px-20">
                Registro
              </h1>
              <div className="flex justify-center items-center flex-col px-28 py-10 w-full gap-4">
                <Controller
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      {...field}
                      placeholder="Nombres y apellidos"
                      fullWidth
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="idNumber"
                  render={({ field }) => (
                    <TextField
                      variant="outlined"
                      {...field}
                      placeholder="No de Documento"
                      fullWidth
                    />
                  )}
                />

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

                <Controller
                  control={control}
                  name="role"
                  render={({ field }) => (
                    // <InputLabel id="role-label">Seleccionar Rol</InputLabel>
                    <Select
                      labelId="role-label"
                      placeholder="Seleccionar Rol"
                      fullWidth
                      {...field}
                      label="Seleccionar Rol"
                    >
                      <MenuItem value="" disabled>
                        Seleccionar Rol
                      </MenuItem>
                      <MenuItem value={userRoles.ADMIN}>Admin</MenuItem>
                      <MenuItem value={userRoles.SELLER}>Vendedor</MenuItem>
                      <MenuItem value={userRoles.CLIENT}>Cliente</MenuItem>
                    </Select>
                  )}
                />

                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] px-10 py-2 rounded-lg text-xl text-white normal-case"
                  variant="outlined"
                  onClick={signUp}
                >
                  Crear cuenta
                </Button>
                <h1 className="text-black pt-4">
                  Volver a
                  <a className="underline text-[#0074D9]" href="/">
                    Inicio de sesión
                  </a>
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-screen bg-[#0074D9] pt-32">
            <div className="flex flex-col justify-center items-center w-full">
              <img alt="logo" src={LOGO} />
            </div>
          </div>
        </Hidden>
        {/* <Hidden mdUp>
          <div className="w-full pt-16">
            <div className="flex flex-col justify-center items-center w-full">
              <img
                className="w-[200px] sm:w-[350px] h-[200px] sm:h-[350px]"
                alt="logo"
                src={logoBlue}
              />
              <h1 className="text-black text-4xl md:text-5xl text-center font-bold px-20">
                Registro
              </h1>
              <div className="flex justify-center items-center flex-col px-8 sm:px-28 py-10 w-full">
                <TextField
                  
                  variant="outlined"
                  value={form.name}
                  onChange={(e) => handleInputChange(e, "name")}
                  placeholder="Nombres y apellidos"
                  fullWidth
                />
                <TextField
                  
                  variant="outlined"
                  value={form.idNumber}
                  onChange={(e) => handleInputChange(e, "idNumber")}
                  placeholder="No de Documento"
                  fullWidth
                />
                <TextField
                  
                  variant="outlined"
                  value={form.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  placeholder="Email"
                  fullWidth
                />
                <TextField
                  
                  variant="outlined"
                  value={form.password}
                  onChange={(e) => handleInputChange(e, "password")}
                  placeholder="Contraseña"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    ),
                  }}
                  fullWidth
                />
                <FormControl
                  fullWidth
                  variant="outlined"
                  
                >
                  <InputLabel id="role-label">Seleccionar Rol</InputLabel>
                  <Select
                    labelId="role-label"
                    value={form.role}
                    onChange={handleRoleChange}
                    label="Seleccionar Rol"
                  >
                    <MenuItem value="" disabled>
                      Seleccionar Rol
                    </MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="vendedor">Vendedor</MenuItem>
                    <MenuItem value="cliente">Cliente</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] py-2 rounded-lg text-xl text-white normal-case sm:w-1/2  w-full"
                  variant="outlined"
                  href="/"
                >
                  Crear cuenta
                </Button>
                <h1 className="text-black pt-4">
                  Volver a{" "}
                  <a className="underline text-[#0074D9]" href="/">
                    Inicio de sesión
                  </a>
                </h1>
              </div>
            </div>
          </div>
        </Hidden> */}
      </div>
      <Alert
        open={openAlert}
        onClick={() => setOpenAlert(false)}
        labelText="¡Te has registrado con éxito! Ahora confirma en tu correo electrónico"
        labelButton="Entendido"
        icon={<SuccessCheckIcon />}
      />
      <Alert
        open={openErrorAlert}
        onClick={closeErrorAlert}
        labelText="¡Ha ocurrido un error, el correo o contraseña son inválidos, vuelve a intentar!"
        labelButton="Cerrar"
        icon={<ErrorIcon />}
      />
    </div>
  );
};
