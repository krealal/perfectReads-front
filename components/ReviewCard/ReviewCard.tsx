import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteReviewThunk } from "../../redux/thunks/reviewThunks";
import Button from "../Button/Button";
import Router from "next/router";
import { Rating } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastMessage from "../../utils/toast";

const Card = styled.div`
  width: 330px;
  height: 153px;
  display: flex;
  background: #dedede;
  justify-content: center;
  border-radius: 4px;
  margin: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 12px;
`;

const ProfileImg = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  object-fit: cover;
  border-radius: 50%;
  margin-top: -25px;
`;

const Username = styled.p`
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.11em;
  color: #000000;
  margin: 0;
  margin-top: 30px;
`;
const Tittle = styled.p`
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.11em;
  color: #737373;
  margin: 0;
  margin-bottom: 10px;
`;

const Review = styled.div`
  width: 300px;
  font-weight: normal;
  font-size: 15px;
  line-height: 13px;
  color: #5c5c5c;
  letter-spacing: 0.11em;
`;

const Score = styled.div`
  margin-left: 15px;
  align-self: flex-start;
  position: absolute;
  margin-top: 110px;
`;

const ButtonDiv = styled.div`
  display: flex;
  position: absolute;
  right: 10px;
`;

type ReviewProps = {
  image: string;
  name: string;
  review: string;
  id: string;
  score: number;
};

const ReviewCard = ({
  image,
  name,
  review,
  id,
  score,
}: ReviewProps): JSX.Element => {
  const dispatch = useDispatch();
  const deleteTask = (idToDelete: string) => {
    toastMessage("Review successfully deleted", "normal");
    dispatch(deleteReviewThunk(idToDelete));
  };

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (!token) {
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
          <Card>
            <ProfileImg src={image} alt={name} />
            <Username>{name}</Username>
            <Tittle>Review</Tittle>
            <Review>{review}</Review>
            <Score>
              <Rating
                name="read-only"
                value={score}
                title={`${name}'s score`}
                readOnly
              />
            </Score>
          </Card>
        </>
      );
    }
  }
  return (
    <>
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
        <Card>
          <ButtonDiv>
            <Button
              actionOnClick={() => {
                Router.push({
                  pathname: "/update-review",
                  query: { id: id },
                });
              }}
              type="edit"
            />

            <Button
              actionOnClick={() => {
                deleteTask(id);
              }}
              type="delete"
            />
          </ButtonDiv>

          <ProfileImg src={image} alt={name} />
          <Username>{name}</Username>
          <Tittle>Review</Tittle>
          <Review>{review}</Review>
          <Score>
            <Rating
              name="read-only"
              value={score}
              title={`${name}'s score`}
              readOnly
            />
          </Score>
        </Card>
      </>
    </>
  );
};

export default ReviewCard;
