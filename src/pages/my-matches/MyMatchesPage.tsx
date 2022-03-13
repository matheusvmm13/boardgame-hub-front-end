import styled from "styled-components";
import Header from "../../components/header/Header";

const MyMatchesPage = () => {
  return (
    <>
      <Wrapper className="container">
        <Header title={"My Matches"} />
        <ul className="matches__list"></ul>
      </Wrapper>
    </>
  );
};

export default MyMatchesPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;
