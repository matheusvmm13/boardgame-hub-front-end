import styled from "styled-components";

export interface ButtonProps {
  buttonText: string;
  actionOnClick: () => void;
}

const MainButton = ({
  buttonText,
  actionOnClick,
}: ButtonProps): JSX.Element => {
  return <Button onClick={actionOnClick}>{buttonText}</Button>;
};

export default MainButton;

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  width: 270px;
  height: 60px;
  color: #fff;
  font-weight: 900;
  font-family: inherit;
  font-size: 1.3rem;
  padding: 0.6rem 2rem;
  margin: 2rem 1rem;
  border: none;
  border-radius: 15px;

  &:hover {
    color: #fff;
    filter: brightness(95%);
  }
  &:active {
    transform: scale(0.99);
    background-color: darken(#3d50df, 25%);
    box-shadow: 0 1px 20px #d6d6d6;
  }
`;
