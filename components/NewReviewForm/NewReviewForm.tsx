import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../redux/thunks/reviewThunks";
import { FormContainer } from "./NewReviewForm.style";

const RegisterForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const blannkFields = {
    name: "",
    review: "",
    score: 1,
    image: "",
  };
  const [formData, setFormData] = useState(blannkFields);

  const changeData = (event: any) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    dispatch(createReviewThunk(formData));
  };

  return (
    <FormContainer onSubmit={submitForm} autoComplete="off" noValidate>
      <ul>
        <li>
          <h1 className="title">New Review</h1>
          <p className="userReg"></p>
        </li>
        <li>
          <label title="name" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={changeData}
            required
          />
        </li>
        <li>
          <label title="image" htmlFor="image">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={changeData}
            required
          />
        </li>
        <li>
          <label title="score" htmlFor="score">
            Score
          </label>
          <input
            type="number"
            name="score"
            id="score"
            min="1"
            max="5"
            required
          />
        </li>
        <li>
          <label title="review" htmlFor="review">
            Review
          </label>
          <input
            name="review"
            id="review"
            maxLength={105}
            onChange={changeData}
            required
          />
        </li>

        <li>
          <button type="submit" className="button">
            Add Review
          </button>
        </li>
      </ul>
    </FormContainer>
  );
};

export default RegisterForm;
