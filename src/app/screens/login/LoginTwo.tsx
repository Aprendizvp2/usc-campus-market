import { useState } from "react";
import { supabase } from "../../crud/createClient";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  Hidden,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import logoBlue from "../../assets/logo/logo-blue.png";
import logo from "../../assets/logo/logo.png";
import Alert from "../../components/alert/Alert";
import { ErrorIcon, SuccessCheckIcon } from "../../assets/svg";

function LoginTwo() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showHelperText, setShowHelperText] = useState(false);
  const [showError, setShowError] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [form, setForm] = useState({
    email: "",
    role: "",
    password: "",
  });

  const handleClickOpenSuccessAlert = () => {
    setOpenAlert(!openAlert);
  };

  const handleClickOpenErrorAlert = () => {
    setOpenErrorAlert(!openErrorAlert);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleInputChange = (e: any, fieldName: any) => {
    const value = e.target.value;
    setForm({ ...form, [fieldName]: value });
  };

  const handleRoleChange = (event: any) => {
    setForm({ ...form, role: event.target.value as string });
  };

  const onClickSignIn = async () => {
    if (form.email === "" || form.password === "" || form.role === "") {
      setShowHelperText(true);
      setShowError(true);
      return;
    }

    try {
      const { data, error } = await supabase
        .from("user")
        .select("*")
        .eq("email", form.email)
        .eq("role", form.role)
        .single();

      if (error) {
        handleClickOpenErrorAlert();
        return;
      }

      if (!data || data.password !== form.password) {
        handleClickOpenErrorAlert();
        return;
      }
      console.log("Inicio de sesión exitoso");
      handleClickOpenSuccessAlert();

      switch (form.role) {
        case "admin":
          navigate("/home-admin");
          break;
        case "client":
          navigate("/home-client");
          break;
        case "seller":
          navigate("/home");
          break;
        default:
          break;
      }
    } catch (error) {
      handleClickOpenErrorAlert();
    }
  };

  const onClickGoToHome = () => {
    navigate("/home");
  };

  return (
    <div>
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
                    value={form.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    helperText={
                      showHelperText && form.email === "" ? (
                        <p className="text-red-500">Debes ingresar un correo</p>
                      ) : (
                        ""
                      )
                    }
                    error={showError && form.email === "" ? true : false}
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
                    helperText={
                      showHelperText && form.password === "" ? (
                        <p className="text-red-500">
                          Debes ingresar una contraseña
                        </p>
                      ) : (
                        ""
                      )
                    }
                    error={showError && form.password === "" ? true : false}
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
                      <MenuItem value="seller">Vendedor</MenuItem>
                      <MenuItem value="client">Cliente</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] px-10 py-2 rounded-lg text-xl text-white normal-case"
                    variant="outlined"
                    onClick={onClickSignIn}
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
                      <MenuItem value="seller">Vendedor</MenuItem>
                      <MenuItem value="client">Cliente</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] py-2 rounded-lg text-xl text-white normal-case sm:w-1/2  w-full"
                    variant="outlined"
                    href="/home"
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
        <Alert
          open={openAlert}
          onClick={onClickGoToHome}
          labelText="¡Te has registrado con éxito!"
          labelButton="Ir a el inicio"
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
    </div>
  );
}

export default LoginTwo;
