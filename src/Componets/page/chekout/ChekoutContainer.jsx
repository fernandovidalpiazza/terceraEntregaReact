import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Checkout from "./Chekout";
import "./Checkout.css";

const CheckoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("No te olvides de completar este campo.")
        .min(5)
        .max(50),
      email: Yup.string()
        .email("No te olvides de ingresar un mail válido.")
        .required("No te olvides de completar este campo."),
      password: Yup.string()
        .required("No te olvides de completar este campo.")
        .matches(
          /(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
          "La contraseña debe tener entre 6 a 15 caracteres, una letra mayúscula, letras minúsculas y números."
        ),
    }),
    validateOnChange: false,
  });

  const navigate = useNavigate();

  return (
    <Checkout
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
};

export default CheckoutContainer;
