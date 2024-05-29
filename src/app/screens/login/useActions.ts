import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAuthProvider } from "../../../context";
import { userRoles } from "../../../types/user";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Debes de ingresar un email")
    .email("Email inválido"),
  password: yup.string().required("Debes de ingresar una contraseña"),
});

export const useActions = () => {
  const navigate = useNavigate();

  const { handleSignIn } = useAuthProvider();

  const [openAlert, setOpenAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState({
    open: false,
    error: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const { control, getValues, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { isValid, errors } = formState;

  const signIn = async () => {
    const { email, password } = getValues();
    const error = await handleSignIn(email, password);
    if (error === "") {
      setOpenAlert(true);
    } else {
      setErrorAlert({ open: true, error: error });
    }
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  const closeAlert = () => setOpenAlert(false);
  const closeErrorAlert = () => setErrorAlert({ open: false, error: "" });

  return {
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
  };
};
