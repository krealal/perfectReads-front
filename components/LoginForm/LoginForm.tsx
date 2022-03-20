import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "styled-components";
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

interface FormProps {
  submit: any;
  changeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
}

const LoginForm = ({
  submit,
  formData,
  changeData,
}: FormProps): JSX.Element => {
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
        onSubmit={submit}
      >
        <TittleForm>Log in</TittleForm>
        <TextField
          id="username"
          label="Username"
          type="text"
          onChange={changeData}
          value={formData.username}
        />
        <TextField
          id="password"
          label="password"
          type="password"
          onChange={changeData}
          value={formData.password}
        />

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
