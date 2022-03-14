import { useState } from "react";
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
    score: 1,
    image: "",
  };
  const [formData, setFormData] = useState(blannkFields);

  const changeData = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const form = (event: any) => {
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
        />
      </RegisterCont>
    </>
  );
};

export default NewReview;
