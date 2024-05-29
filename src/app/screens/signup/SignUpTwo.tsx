import { ChangeEvent, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { ErrorIcon, SuccessCheckIcon } from "../../assets/svg";
import Alert from "../../components/alert/Alert";
import { supabase } from "../../crud/createClient";
import { SelectChangeEvent } from "@mui/material/Select";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  idnumber: string;
  role: string;
}

export default function SignUpTwo() {
  const navigate = useNavigate();
  const [openAlert, setOpenAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<User>({
    id: "",
    name: "",
    email: "",
    password: "",
    idnumber: "",
    role: "",
  });

  async function onClickSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const { error } = await supabase.from("user").insert({
        name: form.name,
        email: form.email,
        password: form.password,
        idnumber: form.idnumber,
        role: form.role,
      });

      if (error) {
        console.error("Error inserting user:", error);
        handleClickOpenErrorAlert();
      } else {
        handleClickOpenSuccesAlert();
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      handleClickOpenErrorAlert();
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
    setForm({ ...form, role: event.target.value });
  };

  const handleClickOpenSuccesAlert = () => {
    setOpenAlert(true);
  };

  const handleClickOpenErrorAlert = () => {
    setOpenErrorAlert(true);
  };

  const onClickGoToLogin = () => {
    navigate("/login");
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
                <form onSubmit={onClickSignIn}>
                  <TextField
                    name="name"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    placeholder="Nombres y apellidos"
                    fullWidth
                  />
                  <TextField
                    name="idnumber"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.idnumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    placeholder="No de Documento"
                    fullWidth
                  />
                  <TextField
                    name="email"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    placeholder="Email"
                    fullWidth
                  />
                  <TextField
                    name="password"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
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
                      name="role"
                      value={form.role}
                      onChange={handleRoleChange}
                      label="Seleccionar Rol"
                    >
                      <MenuItem value="" disabled>
                        Seleccionar Rol
                      </MenuItem>
                      <MenuItem value="admin">Admin</MenuItem>
                      <MenuItem value="seller">Vendedor</MenuItem>
                      <MenuItem value="cliente">Cliente</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="flex justify-center">
                    <button
                      className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] border-2 border-[#0074D9] px-4 py-2 transition-colors duration-300 ease-in-out rounded-lg text-xl text-white normal-case"
                      type="submit"
                    >
                      Crear cuenta
                    </button>
                  </div>
                </form>
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
                <form onSubmit={onClickSignIn}>
                  <TextField
                    name="name"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    placeholder="Nombres y apellidos"
                    fullWidth
                  />
                  <TextField
                    name="idnumber"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.idnumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    placeholder="No de Documento"
                    fullWidth
                  />
                  <TextField
                    name="email"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.email}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
                    placeholder="Email"
                    fullWidth
                  />
                  <TextField
                    name="password"
                    sx={{ marginBottom: 4 }}
                    variant="outlined"
                    value={form.password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(e)
                    }
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
                      name="role"
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
                  <div className="flex justify-center">
                    <button
                      className="bg-[#0074D9] hover:bg-white hover:text-[#0074D9] border-2 border-[#0074D9] px-4 py-2 transition-colors duration-300 ease-in-out rounded-lg text-xl text-white normal-case"
                      type="submit"
                    >
                      Crear cuenta
                    </button>
                  </div>
                </form>
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
