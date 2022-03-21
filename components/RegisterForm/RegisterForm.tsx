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

interface FormProps {
  submit: any;
  changeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formData: any;
  changeImage: any;
}

const RegisterForm = ({
  submit,
  formData,
  changeData,
  changeImage,
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
        <TittleForm>Register</TittleForm>
        <TextField
          id="name"
          label="Name"
          type="text"
          onChange={changeData}
          value={formData.name}
        />
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
        <TextField
          id="email"
          label="example@email.com"
          type="email"
          onChange={changeData}
          value={formData.email}
        />
        <TextField
          id="about"
          label="About"
          type="text"
          multiline
          rows={6}
          onChange={changeData}
          inputProps={{ maxLength: 205 }}
          value={formData.about}
        />

        <Button variant="contained" component="label">
          Upload File
          <input id="image" type="file" hidden onChange={changeImage} />
        </Button>

        <ButtonContainer>
          <Button variant="contained" type="submit">
            REGISTER
          </Button>
          <p>
            Alredy a member? <Link href="/login">Log in</Link>
          </p>
        </ButtonContainer>
      </Box>
    </>
  );
};

export default RegisterForm;
