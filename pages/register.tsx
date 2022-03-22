/* eslint-disable @next/next/no-img-element */
import { useDispatch } from "react-redux";
import styled from "styled-components";
import React, { FormEventHandler, useState } from "react";
import { registerThunk } from "../redux/thunks/userThunk";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const LoginCont = styled.div`
  height: 1200px;
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
    height: 100vw;

    .tittleContainer {
      display: none;
    }
    .sectionForm {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin-left: 100px;
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
    <LoginCont>
      <div className="tittleContainer">
        <h1 className="tittlePerfect">perfect</h1>
        <h1 className="tittleReads">reads</h1>
      </div>
      <section className="sectionForm">
        <RegisterForm
          changeData={changeData}
          formData={formData}
          submit={submit}
          changeImage={changeFile}
        />
      </section>
      <img
        src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/200000/200441.jpg"
        alt="library"
        className="libraryImage"
      ></img>
    </LoginCont>
  );
};

export default Register;
