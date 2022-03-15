import React, { FormEventHandler, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Form from "../components/Form/Form";
import { createReviewThunk } from "../redux/thunks/reviewThunks";

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

  const getRatting = (rating: any) => {
    setFormData({ ...formData, score: rating });
  };

  const form: FormEventHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    event.preventDefault();
    dispatch(createReviewThunk(formData));
  };

  return (
    <>
      <RegisterCont>
        <Form
          buttonText="Add Review"
          tittle="New Review"
          submit={form}
          changeData={changeData}
          getScore={getRatting}
        />
      </RegisterCont>
    </>
  );
};

export default NewReview;
