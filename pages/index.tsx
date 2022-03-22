/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { loadReviewThunk } from "../redux/thunks/reviewThunks";
import { ReviewsForm } from "../types/reviewsProps";
import RootState from "../types/RootState";
import Button from "@mui/material/Button";
import Router from "next/router";
import { CircularProgress } from "@mui/material";
import { wrapper } from "../redux/store";

const BookMain = styled.main`
  .bookdiv {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    margin-top: 80px;
  }
  .bookCover {
    height: 272px;
    width: 180px;
  }
  .bookInfoDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .bookTittle {
    font-size: 18px;
    margin: 0;
    font-weight: normal;
  }
  .bookAuthor {
    font-size: 15px;
    color: #a4a4a3;
    margin: 0;
    font-weight: normal;
  }
  .scoreImage {
    margin-top: 8px;
    margin-bottom: 20px;
    height: 25px;
  }
  .bookNumbers {
    display: flex;
    justify-content: space-between;
  }
  .numberText {
    font-size: 12px;
  }
  .categoryText {
    font-size: 10px;
    margin: 0;
    font-weight: normal;
    color: #bcbaba;
  }
  .reviewDiv {
    padding-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-end;
  }
  .linkBooks {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.11em;
    color: #c4c4c3;
    text-decoration: none;
  }

  .separator {
    width: 328px;
    border: 1px solid #c3c3c4;
    display: flex;
    justify-content: center;
  }

  .reviews {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 90px;
  }

  @media (min-width: 400px) {
    .bookdiv {
      background-image: url("https://www.tor.com/wp-content/uploads/2016/08/WoK-wallpaper-1680x1050.jpg");
      height: 600px;
      background-size: cover;
      background-position: center;
      flex-direction: column-reverse;
      justify-content: space-evenly;
      align-items: center;
    }
    .scoreImage {
      display: none;
    }
    .bookNumbers {
      display: none;
    }
    .bookTittle {
      font-size: 48px;
    }
    .bookAuthor {
      font-size: 25px;
    }
    .bookInfoDiv {
      align-items: center;
    }
    .separator {
      width: 90%;
    }
    .reviews {
      justify-content: space-evenly;
      flex-wrap: wrap;
      flex-direction: row;
    }
  }
`;

const Home: NextPage = (): JSX.Element => {
  const reviewState: ReviewsForm = useSelector<RootState, any>(
    (state) => state.reviewsList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReviewThunk);
  }, [dispatch]);

  return (
    <BookMain>
      <div className="bookdiv">
        <img className="bookCover" src="/img/twok.jpg" alt="rating star" />
        <div className="bookInfoDiv">
          <h1 className="bookTittle">The Way Of Kings</h1>
          <h2 className="bookAuthor">Brandon Sanderson</h2>
          <div>
            <img
              className="scoreImage"
              src="/img/fav-blank.png"
              alt="rating star"
            />
            <img
              className="scoreImage"
              src="/img/fav-blank.png"
              alt="rating star"
            />
            <img
              className="scoreImage"
              src="/img/fav-blank.png"
              alt="rating star"
            />
            <img
              className="scoreImage"
              src="/img/fav-blank.png"
              alt="rating star"
            />
            <img
              className="scoreImage"
              src="/img/fav-blank.png"
              alt="rating star"
            />
          </div>
          <div className="bookNumbers">
            <div>
              <p className="numberText">154k</p>
              <p className="categoryText">Ratings</p>
            </div>
            <div>
              <p className="numberText">13k</p>
              <p className="categoryText">Reviews</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewDiv">
        <a className="linkBooks" href="">
          GENERAL
        </a>
        <a className="linkBooks" href="">
          REVIEWS
        </a>
        <Button
          variant="contained"
          onClick={() => {
            Router.push("/new-review");
          }}
          size="small"
        >
          + Review
        </Button>
      </div>
      <hr className="separator" />

      {!reviewState.length && <CircularProgress />}

      <div className="reviews">
        {reviewState.map((aReview, index) => (
          <ReviewCard
            name={aReview.name}
            image={aReview.image}
            review={aReview.review}
            key={index}
            id={aReview.id}
            score={aReview.score}
          />
        ))}
      </div>
    </BookMain>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch<any>(loadReviewThunk());
    return { props: {} };
  }
);

export default Home;
