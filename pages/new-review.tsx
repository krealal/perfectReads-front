import Router from "next/router";
import React, { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Form from "../components/Form/Form";
import { createReviewThunk } from "../redux/thunks/reviewThunks";
import toastMessage from "../utils/toast";

const RegisterCont = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewReview = (): JSX.Element => {
  const dispatch = useDispatch();

  const blannkFields = {
    name: "",
    review: "",
    score: 0,
    image: "",
  };
  const [formData, setFormData] = useState(blannkFields);

  const changeData: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const getRatting = (rating: number) => {
    setFormData({ ...formData, score: rating });
  };

  const form: FormEventHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    Router.push("/");
    await dispatch(createReviewThunk(formData));
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RegisterCont>
        <Form
          buttonText="Add Review"
          tittle="New Review"
          submit={form}
          changeData={changeData}
          getScore={getRatting}
          formData={formData}
        />
      </RegisterCont>
    </>
  );
};

export default NewReview;
