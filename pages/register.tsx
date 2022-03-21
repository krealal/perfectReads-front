import { useDispatch } from "react-redux";
import styled from "styled-components";
import React, { FormEventHandler, useState } from "react";
import { loginThunk, registerThunk } from "../redux/thunks/userThunk";
import RegisterForm from "../components/RegisterForm/RegisterForm";

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

const Register = (): any => {
  const dispatch = useDispatch();

  const blankFields = {
    username: "",
    password: "",
    image: "",
    about: "",
    name: "",
    email: "",
  };
  const [formData, setFormData] = useState(blankFields);

  const changeData: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const changeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: (event.target.files as FileList)[0],
    });
  };

  const submit: FormEventHandler = (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const data = formData;
    setFormData(blankFields);
    dispatch(registerThunk(data));
  };
  return (
    <RegisterCont>
      <TittlePage>
        <Tittle1>perfect</Tittle1>
        <Tittle2>reads</Tittle2>
      </TittlePage>
      <RegisterForm
        changeImage={changeFile}
        changeData={changeData}
        formData={formData}
        submit={submit}
      />
    </RegisterCont>
  );
};

export default Register;
