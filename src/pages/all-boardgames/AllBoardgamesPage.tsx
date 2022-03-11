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
        "https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&limit=50&pretty=true&client_id=KZeBa27mqo"
      );
      const { games } = await response.json();
      setBoardgameResults(games);
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
