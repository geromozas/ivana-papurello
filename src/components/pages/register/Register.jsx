import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register, db } from "../../../firebaseConfig.js";
import { setDoc, doc } from "firebase/firestore";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (data) => {
      try {
        console.log("Registro exitoso");
        const res = await register(data);
        console.log(res);
        if (res.user.uid) {
          await setDoc(doc(db, "users", res.user.uid), { rol: "user" });
        }
        if (res.user) {
          navigate("/login");
        } else {
          console.log("No se pudo realizar el registro");
        }
      } catch (error) {
        console.log(error);
      } 
    },
    validateOnChange: false,
    validationSchema: Yup.object({
      email: Yup.string().required("Campo requerido").email("Email invalido"),
      password: Yup.string()
        .required("Campo obligatorio")
        .min(8, "Debe tener mas 8 o mas caracteres")
        .matches(/[A-Z]/, "Debe tener al menos una letra mayuscula")
        .matches(/[a-z]/, "Debe tener al menos una letra minuscula")
        .matches(/\d/, "Debe tener al menos un numero"),
      confirmPassword: Yup.string()
        .required("Campo obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
    }),
  });
  console.log(errors);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // backgroundColor: theme.palette.secondary.main,
      }}
    >
      <form onSubmit={handleSubmit}>
        <Grid
          container
          rowSpacing={2}
          // alignItems="center"
          justifyContent={"center"}
        >
          <Grid item xs={10} md={12}>
            <TextField
              name="email"
              label="Email"
              fullWidth
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
          </Grid>
          <Grid item xs={10} md={12}>
            <FormControl
              variant="outlined"
              fullWidth
              error={errors.password ? true : false}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Contraseña
              </InputLabel>
              <OutlinedInput
                onChange={handleChange}
                error={errors.password ? true : false}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="primary" />
                      ) : (
                        <Visibility color="primary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Contraseña"
              />
              {errors.password && (
                <FormHelperText>{errors.password}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={10} md={12}>
            <FormControl
              variant="outlined"
              fullWidth
              error={errors.password ? true : false}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirmar contraseña
              </InputLabel>
              <OutlinedInput
                onChange={handleChange}
                error={errors.confirmPassword ? true : false}
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? (
                        <VisibilityOff color="primary" />
                      ) : (
                        <Visibility color="primary" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirmar contraseña"
              />
              {errors.password && (
                <FormHelperText>{errors.password}</FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid container justifyContent="center" spacing={3} mt={2}>
            <Grid item xs={10} md={7}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  color: "white",
                  textTransform: "none",
                  textShadow: "2px 2px 2px grey",
                }}
              >
                Registrarme
              </Button>
            </Grid>
            <Grid item xs={10} md={7}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => navigate("/login")}
                type="button"
              >
                Regresar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Register;
