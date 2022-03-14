import styled from "styled-components";
import Form from "../components/Form/Form";

const UpdateReview = (): JSX.Element => {
  const RegisterCont = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <RegisterCont>
        <Form buttonText="Update" tittle="Update Review" />
      </RegisterCont>
    </>
  );
};

export default UpdateReview;
