import styled from "styled-components";

const RegisterForm = (): JSX.Element => {
  const FormContainer = styled.form`
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.34);
    padding: 30px;
    width: 50%;
    min-width: 400px;
    & ul {
      & li {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 30px;
        width: 222px;
        & .title {
          color: #b8bbbe;
          padding: 0;
          margin: 0;
        }
        & .userReg {
          color: #b8bbbe;
        }
        & label {
          margin-bottom: 7px;
          color: #b8bbbe;
        }
        & input {
          background-color: #fff;
          border: 1px solid #fcfcfc;
          padding: 10px;
          color: #000;
          width: 100%;
          outline: none;
        }
        & button {
          width: 100%;
          background-color: #2196f3;
          padding: 10px;
          border: 1px solid #000;
          list-style: none;
          text-decoration: none;
          color: #fff;
        }
        & button:hover {
          background-color: #2172f3;
        }
        & p {
          width: 244px;
          margin-top: 10px;
          font-size: 13px;
          color: #70747a;
          & .link {
            color: #5765f2;
            text-decoration: none;
          }
        }
      }
    }
  `;

  return (
    <FormContainer>
      <ul>
        <li>
          <h1 className="title">New Review</h1>
          <p className="userReg"></p>
        </li>
        <li>
          <label title="name" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" required />
        </li>
        <li>
          <label title="image" htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" required />
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
          <textarea
            name="review"
            id="review"
            maxLength={105}
            rows={5}
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
