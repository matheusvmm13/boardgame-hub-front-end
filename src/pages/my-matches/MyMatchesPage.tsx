import styled from "styled-components";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DecodedToken } from "../../components/form/FormMatch";
import { RootState } from "../../redux/reducers";
import { loadMyMatchesThunk } from "../../redux/thunks/matchThunk";
import Header from "../../components/header/Header";
import MatchCard from "../../components/matchCard/MatchCard";
import { Link } from "react-router-dom";

const MyMatchesPage = () => {
  const dispatch = useDispatch();
  const myMatchesData = useSelector((state: RootState) => state.matches);

  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (token !== null) {
      const decodedToken: DecodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      dispatch(loadMyMatchesThunk(userId));
    }
  }, [dispatch]);

  return (
    <>
      <Wrapper className="container">
        <Header title={"My Matches"} />
        {myMatchesData.length > 0 ? (
          <ul className="matches__list">
            {myMatchesData.map((partida) => (
              <MatchCard
                gameTitle={partida.gameTitle}
                image={partida.image}
                date={partida.date}
                maxPlayers={partida.maxPlayers}
                players={partida.players}
                location={partida.location}
                key={partida.id}
                id={partida.id}
                creator={partida.creator}
              />
            ))}
          </ul>
        ) : (
          <div className="container">
            <h2>
              You don't have any current match, but you can{" "}
              <Link to={"/my-matches/new-match"}>create a new match!</Link>
            </h2>
          </div>
        )}
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

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;
