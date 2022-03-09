import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import MatchCard from "../../components/matchCard/MatchCard";
import { RootState } from "../../redux/reducers";
import { loadMatchesThunk } from "../../redux/thunks/matchThunk";

const AllMatchesPage = () => {
  const dispatch = useDispatch();
  const matchesData = useSelector((state: RootState) => state.matches);

  useEffect(() => {
    dispatch(loadMatchesThunk);
  }, [dispatch]);

  return (
    <>
      <Wrapper className="container">
        <Header title={"All Matches"} />
        <ul className="matches__list">
          {matchesData.map((partida) => (
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
      </Wrapper>
    </>
  );
};
export default AllMatchesPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
