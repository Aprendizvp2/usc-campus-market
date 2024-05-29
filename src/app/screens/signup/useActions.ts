import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../../context";
import { userRoles } from "../../../types/user";

const schema = yup.object().shape({
  name: yup.string().required("Debes de ingresar un nombre").min(3).max(20),
  email: yup
    .string()
    .required("Debes de ingresar un email")
    .email("Email inválido"),
  password: yup.string().required("Debes de ingresar una contraseña"),
  idNumber: yup.string().required("Debes de ingresar un documento"),
  role: yup
    .string()
    .oneOf([userRoles.ADMIN, userRoles.CLIENT, userRoles.SELLER])
    .required("Debes seleccionar un rol válido"),
});

export const useActions = () => {
  const navigate = useNavigate();

  const { handleSignUp } = useAuthProvider();

  const [openAlert, setOpenAlert] = useState(false);
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState("");

  const { control, getValues, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      idNumber: "",
      role: userRoles.CLIENT,
    },
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;

  const signUp = async () => {
    const { name, email, password, idNumber, role } = getValues();
    const error = await handleSignUp(email, password, name, idNumber, role);
    if (error === "") {
      setOpenAlert(true);
    } else {
      setOpenErrorAlert(true);
      setError("Error: ❌ " + error);
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onClickGoToLogin = () => navigate("/");
  const closeErrorAlert = () => setOpenErrorAlert(false);

  return {
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
  };
};
