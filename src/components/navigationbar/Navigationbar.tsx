import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface NavbarProps {
  isOpen: boolean;
}

const Navigationbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Nav>
      <Logo href="">
        Boardgame<span>Hub</span>
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link to={`/matches`} className="menu__link">
          <MenuLink>All Matches</MenuLink>
        </Link>
        <Link to={`/my-matches`} className="menu__link">
          <MenuLink>My Matches</MenuLink>
        </Link>
        <Link to={`/my-matches/new-match`} className="menu__link">
          <MenuLink>New Match</MenuLink>
        </Link>
        <Link to={`/my-boardgames`} className="menu__link">
          <MenuLink>My Boardgames</MenuLink>
        </Link>
        <Link to={`/user/login`} className="menu__link">
          <MenuLink>Login</MenuLink>
        </Link>
        <Link to={`/user/signup`} className="menu__link">
          <MenuLinkAuth>Sign Up</MenuLinkAuth>
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navigationbar;

const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
  @media (max-width: 768px) {
    padding-bottom: 2rem;
  }
`;

const MenuLinkAuth = styled.a`
  padding-top: 1rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  padding-left: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: 900;
  &:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    padding-right: 0rem;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${(props) => props.theme.primary};
  top: 0;
  left: 0;
  right: 0;
`;

const Logo = styled.a`
  padding: 1rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  span {
    font-weight: 900;
    font-size: 1.4rem;
    color: ${(props) => props.theme.secondary};
  }
`;

const Menu = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .menu__link {
    text-decoration: none;
    margin: 0.4rem;
  }
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${(props) => (props.isOpen ? "400px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: ${(props) => props.theme.secondary};
    margin-bottom: 5px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
