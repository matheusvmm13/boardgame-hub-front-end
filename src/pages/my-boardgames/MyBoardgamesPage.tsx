import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import jwtDecode from "jwt-decode";
import { DecodedToken } from "../../components/form/FormMatch";
import Header from "../../components/header/Header";
import { RootState } from "../../redux/reducers";
import { loadMyGamesThunk } from "../../redux/thunks/boardgameThunks";
import BoardgameCard from "../../components/boardgameCard/BoardgameCard";
import { Link } from "react-router-dom";

const MyBoardgamesPage = () => {
  const dispatch = useDispatch();
  const myGamesData = useSelector((state: RootState) => state.boardGames);

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (token !== null) {
      const decodedToken: DecodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      dispatch(loadMyGamesThunk(userId));
    }
  }, [dispatch]);

  return (
    <>
      <Wrapper className="container">
        <Header title={"My Boardgames"} />
        {myGamesData.length > 0 ? (
          <ul className="boardgames__list">
            {myGamesData.map((game) => (
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
          <div className="container">
            <h2>
              You don't have games in your collection, but you can{" "}
              <Link to={"/all-boardgames"}>add games here!</Link>
            </h2>
          </div>
        )}
      </Wrapper>
    </>
  );
};

export default MyBoardgamesPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .boardgames__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;
