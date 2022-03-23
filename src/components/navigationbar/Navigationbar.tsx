import styled from "styled-components";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUserAction } from "../../redux/actions/actionsCreator";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";

export interface NavbarProps {
  isOpen: boolean;
}

const Navigationbar = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.users);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUserAction());
    toast("Good Bye!", {
      icon: "👋",
    });

    navigate("/");
  };

  return (
    <Nav>
      <Logo>
        <Link to="/matches" className="logo__link">
          <span className="logo__boardgame" data-testid="logo-element">
            Boardgame
          </span>
          <span>Hub</span>
        </Link>
      </Logo>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <Link
          to={`/matches`}
          className="menu__link"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user.loggedIn && <MenuLink>All Matches</MenuLink>}
        </Link>
        <Link
          to={`/my-matches`}
          className="menu__link"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user.loggedIn && <MenuLink>My Matches</MenuLink>}
        </Link>
        <Link
          to={`/my-matches/new-match`}
          className="menu__link"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user.loggedIn && <MenuLink>New Match</MenuLink>}
        </Link>
        <Link
          to={`/my-boardgames`}
          className="menu__link"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user.loggedIn && <MenuLink>My Boardgames</MenuLink>}
        </Link>
        <Link
          to={`/all-boardgames`}
          className="menu__link"
          onClick={() => setIsOpen(!isOpen)}
        >
          {user.loggedIn && <MenuLink>All Boardgames</MenuLink>}
        </Link>
        <Link
          to={`/users/login`}
          className="menu__link"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!user.loggedIn && <MenuLink>Login</MenuLink>}
        </Link>
        {user.loggedIn && <MenuLink onClick={logout}>Logout</MenuLink>}
        <Link
          to={`/users/signup`}
          className="menu__link"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!user.loggedIn && <MenuLinkAuth>Sign Up</MenuLinkAuth>}
        </Link>
      </Menu>
    </Nav>
  );
};

export default Navigationbar;

const Nav = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: ${(props) => props.theme.primary};
  top: 0;
  left: 0;
  right: 0;
  z-index: 887;
`;

const Logo = styled.div`
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1.7rem;
  z-index: 888;
  span {
    font-weight: black;
    font-size: 1.4rem;
    color: ${(props) => props.theme.secondary};
  }
  .logo__link {
    text-decoration: none;
  }
  .logo__boardgame {
    color: #fff;
  }
`;

const MenuLink = styled.div`
  padding: 0.3rem 0.8rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  z-index: 888;
  &:hover {
    color: ${(props) => props.theme.secondary};
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

const MenuLinkAuth = styled.div`
  padding-left: 0;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.secondary};
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  font-weight: 900;
  z-index: 888;
  &:hover {
    color: #fff;
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    padding-right: 0rem;
    min-width: 100vw;
  }
`;

const Menu = styled.div<NavbarProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 888;

  .menu__link {
    text-decoration: none;
    margin: 0.4rem;
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
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
  z-index: 888;
  span {
    height: 2px;
    width: 25px;
    background: ${(props) => props.theme.secondary};
    margin-bottom: 5px;
    border-radius: 5px;
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    display: flex;
  }
`;
