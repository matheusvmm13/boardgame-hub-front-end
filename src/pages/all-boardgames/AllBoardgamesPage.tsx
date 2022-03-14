import { useEffect, useState } from "react";
import styled from "styled-components";
import BoardgameCard from "../../components/boardgameCard/boardgameCard";
import Header from "../../components/header/Header";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";

const AllBoardgamesPage = () => {
  const [boardgameResults, setBoardgameResults] = useState<
    BoardgameInterface[]
  >([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_PUBLIC_API}all-boardgames`
      );
      const { boardgames } = await response.json();

      setBoardgameResults(boardgames);
    })();
  }, []);

  return (
    <>
      <Wrapper className="container">
        <Header title={"All Boardgames"} />
        <ul className="boardgame__list">
          {boardgameResults.map((game) => (
            <BoardgameCard
              name={game.name}
              image_url={game.image_url}
              min_players={game.min_players}
              max_players={game.max_players}
              max_playtime={game.max_playtime}
              key={game.name}
              _id={game._id}
            />
          ))}
        </ul>
      </Wrapper>
    </>
  );
};
export default AllBoardgamesPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .boardgame__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;
