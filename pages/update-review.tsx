import styled from "styled-components";
import RegisterForm from "../components/NewReviewForm/NewReviewForm";

const updateReview = (): JSX.Element => {
  const RegisterCont = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  return (
    <>
      <RegisterCont>
        <RegisterForm />
      </RegisterCont>
    </>
  );
};

export default updateReview;
