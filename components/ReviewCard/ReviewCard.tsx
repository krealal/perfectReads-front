import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteReviewThunk } from "../../redux/thunks/reviewThunks";
import Button from "../Button/Button";
import Router from "next/router";

const Card = styled.div`
  width: 330px;
  height: 153px;
  display: flex;
  background: #f7f7f7;
  justify-content: center;
  border-radius: 4px;
  margin-top: 55px;
  margin-bottom: 55px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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
  color: #c4c4c3;
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

const ScoreImg = styled.img`
  margin-top: 8px;
  margin-bottom: 20px;
  height: 25px;
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
  right: 42px;
`;

type ReviewProps = {
  image: string;
  name: string;
  review: string;
  _id: string;
};

const ReviewCard = ({ image, name, review, _id }: ReviewProps): JSX.Element => {
  const dispatch = useDispatch();
  const deleteTask = (_id: string) => {
    dispatch(deleteReviewThunk(_id));
  };

  return (
    <>
      <Card>
        <ButtonDiv>
          <Button
            actionOnClick={() => {
              deleteTask(_id);
            }}
            image="/img/delete.png"
          />

          <Button
            actionOnClick={() => {
              Router.push("/new-review");
            }}
            image="/img/edit.png"
          />
        </ButtonDiv>

        <ProfileImg src={image} alt={name} />
        <Username>{name}</Username>
        <Tittle>Review</Tittle>
        <Review>{review}</Review>
        <Score>
          <ScoreImg src="/img/fav-blank.png" alt="star" />
          <ScoreImg src="/img/fav-blank.png" alt="star" />
          <ScoreImg src="/img/fav-blank.png" alt="star" />
          <ScoreImg src="/img/fav-blank.png" alt="star" />
          <ScoreImg src="/img/fav-blank.png" alt="star" />
        </Score>
      </Card>
    </>
  );
};

export default ReviewCard;
