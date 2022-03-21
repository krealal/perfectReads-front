/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import styled from "styled-components";
import LoginForm from "../components/LoginForm/LoginForm";
import React, { FormEventHandler, useState } from "react";
import { loginThunk } from "../redux/thunks/userThunk";

const RegisterCont = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .tittleContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 85px;
    margin-top: 85px;
  }
  .tittlePerfect {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
  }
  .tittleReads {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
  }
  .libraryImage {
    display: none;
  }
  @media (min-width: 400px) {
    justify-content: center;
    flex-direction: row;
    width: 100vw;
    justify-content: space-between;
    display: flex;

    .tittleContainer {
      display: none;
    }
    .sectionForm {
      display: flex;
      margin-left: 20%;
    }
    .libraryImage {
      display: inline;
      width: 629px;
      height: 100%;
      object-fit: cover;
      right: 0;
    }
  }
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
      <div className="tittleContainer">
        <h1 className="tittlePerfect">perfect</h1>
        <h1 className="tittleReads">reads</h1>
      </div>
      <section className="sectionForm">
        <LoginForm changeData={changeData} formData={formData} submit={form} />
      </section>
      <img
        src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/200000/200441.jpg"
        alt="library"
        className="libraryImage"
      ></img>
    </RegisterCont>
  );
};

export default Login;
