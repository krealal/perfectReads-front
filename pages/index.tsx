import type { NextPage } from "next";
import Router from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../components/Button/Button";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { loadReviewThunk } from "../redux/thunks/reviewThunks";
import { Reviews } from "../types/reviewsProps";
import RootState from "../types/RootState";

const BookCover = styled.img`
  height: 180px;
`;

const BookInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BookNumbersDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BookDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-evenly;
  margin-top: 80px;
`;

const Score = styled.img`
  margin-top: 8px;
  margin-bottom: 20px;
  height: 25px;
`;

const BookTittle = styled.h1`
  font-size: 18px;
  margin: 0;
  font-weight: normal;
`;

const BookAuthor = styled.h2`
  font-size: 15px;
  color: #a4a4a3;
  margin: 0;
  font-weight: normal;
`;

const NumberText = styled.p`
  font-size: 12px;
`;

const CategoryText = styled.p`
  font-size: 10px;
  margin: 0;
  font-weight: normal;
  color: #bcbaba;
`;

const SeparatorLine = styled.hr`
  width: 328px;
  border: 1px solid #c3c3c4;
  display: flex;
  justify-content: center;
`;

const LinkBooks = styled.a`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.11em;
  color: #c4c4c3;

  text-decoration: none;
`;

const GeneralReviewsDiv = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;

const ReviewsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 90px;
`;

const Home: NextPage = (): JSX.Element => {
  const reviewState: Reviews = useSelector<RootState, any>(
    (state) => state.reviewsList
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewThunk);
  }, [dispatch]);

  return (
    <div>
      <main>
        <BookDiv>
          <BookCover src="/img/twok.jpg" alt="rating star" />
          <BookInfoDiv>
            <BookTittle>The Way Of Kings</BookTittle>
            <BookAuthor>Brandon Sanderson</BookAuthor>
            <div>
              <Score src="/img/fav-blank.png" alt="rating star" />
              <Score src="/img/fav-blank.png" alt="rating star" />
              <Score src="/img/fav-blank.png" alt="rating star" />
              <Score src="/img/fav-blank.png" alt="rating star" />
              <Score src="/img/fav-blank.png" alt="rating star" />
            </div>
            <BookNumbersDiv>
              <div>
                <NumberText>154k</NumberText>
                <CategoryText>Ratings</CategoryText>
              </div>
              <div>
                <NumberText>13k</NumberText>
                <CategoryText>Reviews</CategoryText>
              </div>
            </BookNumbersDiv>
          </BookInfoDiv>
        </BookDiv>
        <GeneralReviewsDiv>
          <LinkBooks href="">GENERAL</LinkBooks>
          <LinkBooks href="">REVIEWS</LinkBooks>
          <Button
            actionOnClick={() => {
              Router.push("/new-review");
            }}
            image="/img/plus.png"
          />
        </GeneralReviewsDiv>
        <SeparatorLine />
        <ReviewsDiv>
          {reviewState.map((aReview, index) => (
            <ReviewCard
              name={aReview.name}
              image={aReview.image}
              review={aReview.review}
              key={index}
              _id={aReview._id}
            />
          ))}
        </ReviewsDiv>
      </main>
    </div>
  );
};

export default Home;
