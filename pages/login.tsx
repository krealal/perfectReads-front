import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";
import React, { FormEventHandler, useState } from "react";
import { loginThunk } from "../redux/thunks/userThunk";

const RegisterCont = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TittlePage = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 85px;
  margin-top: 85px;
`;

const Tittle1 = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
`;

const Tittle2 = styled.a`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 35px;
  color: #000000;
`;

const Login = (): JSX.Element => {
  const dispatch = useDispatch();

  const blannkFields = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState(blannkFields);

  const changeData: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const form: FormEventHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    await dispatch(loginThunk(formData));
  };
  return (
    <RegisterCont>
      <TittlePage>
        <Tittle1>perfect</Tittle1>
        <Tittle2>reads</Tittle2>
      </TittlePage>
      <LoginForm changeData={changeData} formData={formData} submit={form} />
    </RegisterCont>
  );
};

export default Login;
