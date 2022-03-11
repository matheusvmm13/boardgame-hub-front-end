import styled from "styled-components";
import Header from "../../components/header/Header";

const MyBoardgamesPage = () => {
  return (
    <>
      <Wrapper className="container">
        <Header title={"My Boardgames"} />
        <ul className="boardgame__list"></ul>
      </Wrapper>
    </>
  );
};
export default MyBoardgamesPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .boardgame__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
