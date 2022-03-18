import { FormEventHandler, useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Form from "../components/Form/Form";
import { ReviewsForm } from "../types/reviewsProps";
import RootState from "../types/RootState";
import { useRouter } from "next/router";
import { updateReviewThunk } from "../redux/thunks/reviewThunks";
import { ToastContainer } from "react-toastify";
import Router from "next/router";
import toastMessage from "../utils/toast";

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

  const review: any = reviewState.find((review) => review.id === id);

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
    const returnDispatch: any = await dispatch(updateReviewThunk(formData));
    if (!returnDispatch.errorCode) {
      toastMessage("Review successfully updated", "normal");
      setTimeout(() => {
        Router.push("/");
      }, 2000);
    }
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
