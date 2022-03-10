import styled from "styled-components";
import Header from "../../components/header/Header";

const NewMatchPage = () => {
  return (
    <>
      <Wrapper className="container">
        <Header title={"New Match"} />
      </Wrapper>
    </>
  );
};

export default NewMatchPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
