import styled from "styled-components";
import FormMatch from "../../components/form/FormMatch";
import Header from "../../components/header/Header";

const NewMatchPage = () => {
  return (
    <>
      <Wrapper className="container">
        <Header title={"New Match"} />
        <SectionContainer className="container__section">
          <figure className="container__image">
            <img
              src="https://uploads-ssl.webflow.com/5f934b0af5bd1b6d04d6ed7b/60d0ba3f01ec2784c62cf7af_local.jpg"
              alt="meeples"
            />
          </figure>
          <FormMatch />
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default NewMatchPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .container__image {
    margin: 0;
  }

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .container__image {
    display: flex;
    @media screen and (min-device-width: 320px) and (max-width: 768px) {
      display: none;
    }

    @media screen and (min-device-width: 769px) and (max-width: 1000px) {
      display: none;
    }
  }
`;

const SectionContainer = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  //flex-grow: 1;
  min-width: 100vw;
  max-width: 100vw;

  img {
    height: 100%;
    width: 38rem;
    object-fit: cover;
    border-radius: 10px;
    flex-grow: 2;
  }
`;
