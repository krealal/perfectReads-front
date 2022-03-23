import { FormEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "../components/Form/Form";
import { ReviewsForm } from "../types/reviewsProps";
import RootState from "../types/RootState";
import Router, { useRouter } from "next/router";
import { updateReviewThunk } from "../redux/thunks/reviewThunks";
import { ToastContainer } from "react-toastify";

const RegisterCont = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UpdateReview = (): JSX.Element => {
  const router = useRouter();
  const id = router.query.id;

  const reviewState: ReviewsForm = useSelector<RootState, any>(
    (state) => state.reviewsList
  );

  const review: any = reviewState.find(
    (actualReview) => actualReview.id === id
  );

  const dispatch = useDispatch();
  const blannkFields = {
    ...review,
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
    const updateDispatch = dispatch(updateReviewThunk(formData));
    await updateDispatch;
    Router.push("/");
  };

  const getRatting = (rating: number) => {
    setFormData({ ...formData, score: rating });
  };

  return (
    <>
      <RegisterCont>
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
        <Form
          buttonText="Update"
          tittle="Update Review"
          changeData={changeData}
          submit={form}
          getScore={getRatting}
          formData={formData}
        />
      </RegisterCont>
    </>
  );
};

export default UpdateReview;
