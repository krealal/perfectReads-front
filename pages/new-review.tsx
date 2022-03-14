import styled from "styled-components";
import RegisterForm from "../components/NewReviewForm/NewReviewForm";

const RegisterCont = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NewReview = (): JSX.Element => {
  return (
    <>
      <RegisterCont>
        <RegisterForm />
      </RegisterCont>
    </>
  );
};

export default NewReview;
