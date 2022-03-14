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
  submit: any;
  changeData: any;
}

const Form = ({
  tittle,
  buttonText,
  submit,
  changeData,
}: formProps): JSX.Element => {
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
  );
};

export default Form;
