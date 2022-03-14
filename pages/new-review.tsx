import styled from "styled-components";
import Form from "../components/Form/Form";

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
        <Form buttonText="Add Review" tittle="New Review" />
      </RegisterCont>
    </>
  );
};

export default NewReview;
