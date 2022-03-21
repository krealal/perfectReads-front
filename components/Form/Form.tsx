import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styled from "styled-components";
import { Rating } from "@mui/material";
import { useState } from "react";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const RatingDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TittleForm = styled.h1`
  font-size: 24px;
  color: #b8bbbe;
  padding: 0px;
  margin: 0px;
`;

interface FormProps {
  tittle: string;
  buttonText: string;
  submit: any;
  changeData: (event: React.ChangeEvent<HTMLInputElement>) => void;
  getScore: (event: any) => void;
  formData: any;
}

const Form = ({
  tittle,
  buttonText,
  submit,
  formData,
  changeData,
  getScore,
}: FormProps): JSX.Element => {
  const [value, setValue] = useState<number | null>(formData.value);

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
        onSubmit={submit}
      >
        <TittleForm>{tittle}</TittleForm>
        <TextField
          id="name"
          label="Name"
          type="text"
          onChange={changeData}
          value={formData.name}
        />
        <TextField
          id="image"
          label="Image"
          type="text"
          onChange={changeData}
          value={formData.image}
        />
        <RatingDiv>
          <p>Rating</p>
          <Rating
            id="score"
            name="simple-controlled"
            value={formData.score}
            onChange={(event, newValue) => {
              setValue(newValue);
              getScore((event.target as HTMLTextAreaElement).value);
            }}
          />
        </RatingDiv>

        <TextField
          id="review"
          label="Review"
          type="text"
          multiline
          rows={4}
          onChange={changeData}
          inputProps={{ maxLength: 105 }}
          value={formData.review}
        />
        <ButtonContainer>
          <Button variant="contained" type="submit">
            {buttonText}
          </Button>
        </ButtonContainer>
      </Box>
    </>
  );
};

export default Form;
