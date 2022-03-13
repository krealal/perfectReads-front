import styled from "styled-components";

interface ButtonProps {
  actionOnClick: () => void;
  image: string;
}

const ButtonGeneric = styled.button`
  margin-left: 20px;
  margin-top: 5px;
  border: 0;
  background-color: transparent;
`;
const ButtonImage = styled.img`
  height: 20px;
`;

const Button = ({ actionOnClick, image }: ButtonProps): JSX.Element => {
  return (
    <>
      <ButtonGeneric
        onClick={(event: React.MouseEvent<HTMLButtonElement>) =>
          actionOnClick()
        }
      >
        <ButtonImage src={image} alt={`${image} button`}></ButtonImage>
      </ButtonGeneric>
    </>
  );
};

export default Button;
