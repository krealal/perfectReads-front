import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Form from "../components/Form/Form";

const RegisterCont = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UpdateReview = (): JSX.Element => {
  const dispatch = useDispatch();

  const blannkFields = {
    name: "",
    review: "",
    score: 1,
    image: "",
  };
  const [formData, setFormData] = useState(blannkFields);

  const changeData = () => {};

  const form = () => {};

  return (
    <>
      <RegisterCont>
        <Form
          buttonText="Update"
          tittle="Update Review"
          changeData={changeData}
          submit={form}
        />
      </RegisterCont>
    </>
  );
};

export default UpdateReview;
