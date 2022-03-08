import styled from "styled-components";

export interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): JSX.Element => {
  return <Title>{title}</Title>;
};

export default Header;

const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-weight: 900;
  font-size: 2rem;
  padding: 0.6rem 2rem;
`;
