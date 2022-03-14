import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReviewThunk } from "../../redux/thunks/reviewThunks";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TittleForm = styled.h1`
  font-size: 24px;
  color: #b8bbbe;
  padding: 0px;
  margin: 0px;
`;

interface formProps {
  tittle: string;
  buttonText: string;
}

const Form = ({ tittle, buttonText }: formProps): JSX.Element => {
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
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        noValidate
        autoComplete="off"
        onSubmit={submitForm}
      >
        <TittleForm>{tittle}</TittleForm>
        <TextField id="name" label="Name" type="text" onChange={changeData} />
        <TextField id="image" label="Image" type="text" onChange={changeData} />
        <TextField
          id="score"
          label="Score"
          type="number"
          onChange={changeData}
        />
        <TextField
          id="review"
          label="Review"
          type="text"
          multiline
          rows={4}
          onChange={changeData}
          inputProps={{ maxLength: 105 }}
        />
        <ButtonContainer>
          <Button variant="contained" type="submit">
            {buttonText}
          </Button>
        </ButtonContainer>
      </Box>
    </>

    // <FormContainer onSubmit={submitForm} autoComplete="off" noValidate>
    //   <ul>
    //     <li>
    //       <h1 className="title">New Review</h1>
    //       <p className="userReg"></p>
    //     </li>
    //     <li>
    //       <label title="name" htmlFor="name">
    //         Name
    //       </label>
    //       <input
    //         type="text"
    //         name="name"
    //         id="name"
    //         onChange={changeData}
    //         required
    //       />
    //     </li>
    //     <li>
    //       <label title="image" htmlFor="image">
    //         Image
    //       </label>
    //       <input
    //         type="text"
    //         name="image"
    //         id="image"
    //         onChange={changeData}
    //         required
    //       />
    //     </li>
    //     <li>
    //       <label title="score" htmlFor="score">
    //         Score
    //       </label>
    //       <input
    //         type="number"
    //         name="score"
    //         id="score"
    //         min="1"
    //         max="5"
    //         required
    //       />
    //     </li>
    //     <li>
    //       <label title="review" htmlFor="review">
    //         Review
    //       </label>
    //       <input
    //         name="review"
    //         id="review"
    //         maxLength={105}
    //         onChange={changeData}
    //         required
    //       />
    //     </li>

    //     <li>
    //       <button type="submit" className="button">
    //         Add Review
    //       </button>
    //     </li>
    //   </ul>
    // </FormContainer>
  );
};

export default Form;
