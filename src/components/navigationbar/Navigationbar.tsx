import styled from "styled-components";
import { useState } from "react";

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
        <MenuLink href="">All Matches</MenuLink>
        <MenuLink href="">My Matches</MenuLink>
        <MenuLink href="">New Match</MenuLink>
        <MenuLink href="">My Boardgames</MenuLink>
        <MenuLink href="">Login</MenuLink>
        <MenuLinkAuth href="">Sign Up</MenuLinkAuth>
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
    color: #00edf5;
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
  color: #00edf5;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: 900;
  &:hover {
    color: #fff;
  }
  @media (max-width: 768px) {
    padding-right: 0rem;
    padding-bottom: 1rem;
  }
`;

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #3d50df;
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
    color: #00edf5;
  }
`;

export const Menu = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${(props) => (props.isOpen ? "300px" : "0")};
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
    background: #00edf5;
    margin-bottom: 5px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
