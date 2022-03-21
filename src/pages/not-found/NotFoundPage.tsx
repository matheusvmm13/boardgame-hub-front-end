import { Link } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header";

const NotFoundPage = () => {
  return (
    <>
      <Wrapper className="container">
        <Header title={"404 Not Found"} />
        <SectionContainer className="container__section">
          <div className="container">
            <figure className="container__image">
              <img
                src="https://s3.amazonaws.com/blog.puzzlenation.com/board+flip.jpg"
                alt="boardgame table flip"
              />
            </figure>
            <h2>
              <Link to={"/"}>GO HOME!</Link>
            </h2>
          </div>
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default NotFoundPage;

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .container__image {
    margin: 0;
    display: flex;
    align-items: center;
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;

  h2 {
    display: flex;
    justify-content: center;
  }

  img {
    height: 100%;
    width: 30rem;
    object-fit: cover;
    border-radius: 10px;
    flex-grow: 2;

    @media screen and (min-device-width: 320px) and (max-width: 768px) {
      width: 20rem;
    }
  }
`;
