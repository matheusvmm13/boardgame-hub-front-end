import styled from "styled-components";
import EditForm from "../../components/editForm/EditForm";
import Header from "../../components/header/Header";

const EditPage = () => {
  return (
    <>
      <Wrapper className="container">
        <Header title={"Update Match"} />
        <SectionContainer className="container__section">
          <figure className="container__image">
            <img
              src="https://images.unsplash.com/photo-1506954673998-b077f05b13c7"
              alt="boardgame"
            />
          </figure>
          <EditForm />
        </SectionContainer>
      </Wrapper>
    </>
  );
};

export default EditPage;

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
