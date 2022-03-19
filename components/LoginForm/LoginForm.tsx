import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "styled-components";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Rating,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TittleForm = styled.h2`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  color: #000;
`;

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const LoginForm = (): JSX.Element => {
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 2, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
      >
        <TittleForm>Log in</TittleForm>
        <TextField id="user" label="User" type="text" />
        <FormControl sx={{ m: 2, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <ButtonContainer>
          <Button variant="contained" type="submit">
            LOGIN
          </Button>
          <p>
            ¿You need an account? <Link href="/register">Sign Up</Link>
          </p>
        </ButtonContainer>
      </Box>
    </>
  );
};

export default LoginForm;
