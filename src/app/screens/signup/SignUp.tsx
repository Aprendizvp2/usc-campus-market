import { useState } from "react";
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
import logo from "../../assets/logo/logo.png";
import logoBlue from "../../assets/logo/logo-blue.png";
import firebase from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { ErrorIcon, SuccessCheckIcon } from "../../assets/svg";
import Alert from "../../components/alert/Alert";

export default function SignUp() {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    idNumber: "",
    password: "",
  });

  const handleInputChange = (e: any, fieldName: any) => {
    const value = e.target.value;
    setForm({ ...form, [fieldName]: value });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleRoleChange = (event: any) => {
    setForm({ ...form, role: event.target.value as string });
  };

  const handleClickOpenSuccesAlert = () => {
    setOpenAlert(!openAlert);
  };

  const handleClickOpenErrorAlert = () => {
    setOpenErrorAlert(!openErrorAlert);
  };

  const onClickGoToLogin = () => {
    navigate("/");
  };

  const onClickSignUp = async (e: any) => {
    e.preventDefault();
    if (form.email !== "leandro10161999@gmail.com") {
      handleClickOpenErrorAlert();
    }
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(form.email, form.password);
      if (user) {
        handleClickOpenSuccesAlert();
      }
    } catch (error) {
      handleClickOpenErrorAlert();
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <Hidden mdDown>
          <div className="w-full md:w-1/2 pt-28">
            <div className="flex flex-col justify-center items-center w-full">
              <h1 className="text-black text-5xl text-center font-bold px-20">
                Registro
              </h1>
              <div className="flex justify-center items-center flex-col px-28 py-10 w-full">
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.name}
                  onChange={(e) => handleInputChange(e, "name")}
                  placeholder="Nombres y apellidos"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.idNumber}
                  onChange={(e) => handleInputChange(e, "idNumber")}
                  placeholder="No de Documento"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  placeholder="Email"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
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
                  sx={{ marginBottom: 4 }}
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
                  className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] px-10 py-2 rounded-lg text-xl text-white normal-case"
                  variant="outlined"
                  href="/"
                  onClick={onClickSignUp}
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
          <div className="w-full md:w-1/2 h-screen bg-[#0074D9] pt-32">
            <div className="flex flex-col justify-center items-center w-full">
              <img alt="logo" src={logo} />
            </div>
          </div>
        </Hidden>
        <Hidden mdUp>
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
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.name}
                  onChange={(e) => handleInputChange(e, "name")}
                  placeholder="Nombres y apellidos"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.idNumber}
                  onChange={(e) => handleInputChange(e, "idNumber")}
                  placeholder="No de Documento"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
                  variant="outlined"
                  value={form.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  placeholder="Email"
                  fullWidth
                />
                <TextField
                  sx={{ marginBottom: 4 }}
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
                  sx={{ marginBottom: 4 }}
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
        </Hidden>
      </div>
      <Alert
        open={openAlert}
        onClick={onClickGoToLogin}
        labelText="¡Te has registrado con éxito!"
        labelButton="Ir a iniciar sesión"
        icon={<SuccessCheckIcon />}
      />
      <Alert
        open={openErrorAlert}
        onClick={handleClickOpenErrorAlert}
        labelText="¡Ha ocurrido un error, el correo o contraseña son inválidos, vuelve a intentar!"
        labelButton="Cerrar"
        icon={<ErrorIcon />}
      />
    </div>
  );
}
