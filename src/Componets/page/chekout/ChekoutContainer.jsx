import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Message } from "@mui/icons-material";

const chekoutContainer = () => {
  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onsubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("no te olvides de completar este campo")
        .min(5)
        .max(50),
      email: Yup.string()
        .email("no te olvides de ingresar un mail valido")
        .required("no te olvides de completar este campo"),
      password: Yup.string()
        .required("no te olvides de completar este campo")
        .matches(/(?=.[a-z])(?=.*[A-Z]).{6,15}$/, {message: 
          "No te olivides la contraseña debe tener entre 6 a 15 caracteres una letra mayuscual, letras miniscula, y numeros "

        }  ),
       
    }),
    validateOnChange: false,
  });
  console.log(errors);
  const navigate = useNavigate();

  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Pass"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />

        <Button type="sumit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default chekoutContainer;
