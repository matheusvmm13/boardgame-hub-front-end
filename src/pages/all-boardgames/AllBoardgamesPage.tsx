import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BoardgameCard from "../../components/boardgameCard/BoardgameCard";
import Header from "../../components/header/Header";
import Spinner from "../../components/spinner/Spinner";
import { RootState } from "../../redux/reducers";
import { loadGamesThunk } from "../../redux/thunks/boardgameThunks";

const AllBoardgamesPage = () => {
  const dispatch = useDispatch();

  const boardgamesData = useSelector((state: RootState) => state.boardGames);

  useEffect(() => {
    dispatch(loadGamesThunk);
  }, [dispatch]);

  return (
    <>
      <Wrapper className="container">
        <Header title={"All Boardgames"} />
        {boardgamesData.length > 0 ? (
          <ul className="boardgame__list">
            {boardgamesData.map((game) => (
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
        ) : (
          <Spinner />
        )}
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
