import styled from "styled-components";

const NavbarStyled = styled.div`
  .navbar {
    padding: 25px 50px 25px 0;
    display: flex;
    background-color: #3d50df;
    justify-content: space-evenly;
    align-content: center;
  }

  .navbar__logo {
    padding: 0 0 0 0px;
  }

  .navlinks {
    display: flex;
    align-items: center;
    margin: 0;
  }

  .navlinks__link {
    margin: 0 20px;
    color: #fff;
    font-weight: 500;
    display: flex;
    justify-content: flex-end;
  }

  .navlinks__link--login {
    margin: 0 0 0 60px;
    color: #fff;
    font-weight: 500;
  }

  .navlinks__link--signup {
    margin: 0 20px;
    color: #00edf5;
    font-weight: 900;
  }

  .navbar__logo--image {
    height: 150px;
  }

  @media (max-width: 850px) {
    .mobile-menu {
      display: none;
      background-color: #00edf5;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      transition: all 0.2s;

      &.open {
        display: block;
        opacity: 1;
        z-index: 20;
        pointer-events: all;
      }
    }

    .navbar {
      background-color: #fff;
      justify-content: flex-start;
    }

    .burger-menu {
      padding: 10px 0 0 20px;
      z-index: 100;

      &.open {
        padding-top: 35px;
      }
    }

    .burger-menu__dash {
      width: 25px;
      height: 2px;
      border-radius: 1.5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin: 5px;
      border: 1px solid #3d50df;
      background-color: #3d50df;
      z-index: 100;
    }

    .burger-menu__dash--middle {
      width: 18px;
      height: 2px;
      border-radius: 1.5px;
      display: flex;
      flex-direction: column;
      margin: 5px;
      border: 1px solid #3d50df;
      background-color: #3d50df;
      z-index: 100;
    }

    .navlinks {
      display: none;
    }

    .navbar__logo {
      display: none;
    }
  }
`;
export default NavbarStyled;
