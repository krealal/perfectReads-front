import styled from "styled-components";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";

interface ButtonProps {
  actionOnClick: () => void;
  type: string;
}

const ButtonGeneric = styled.button`
  margin-left: 20px;
  margin-top: 5px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;
const ButtonImage = styled.img`
  height: 20px;
`;

const Button = ({ actionOnClick, type }: ButtonProps): JSX.Element => {
  return (
    <>
      <ButtonGeneric
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          actionOnClick()
        }
        title={type}
      >
        {type === "delete" && (
          <DeleteForeverOutlinedIcon style={{ color: "#c73838" }} />
        )}
        {type === "edit" && (
          <ModeEditOutlineIcon style={{ color: "#1665C0" }} />
        )}
      </ButtonGeneric>
    </>
  );
};

export default Button;
