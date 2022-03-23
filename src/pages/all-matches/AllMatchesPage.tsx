import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import MatchCard from "../../components/matchCard/MatchCard";
import { RootState } from "../../redux/reducers";
import { loadMatchesThunk } from "../../redux/thunks/matchThunk";
import Spinner from "../../components/spinner/Spinner";
import { MatchInterface } from "../../utils/types/matchInterface";

const AllMatchesPage = () => {
  const dispatch = useDispatch();
  const matchesData = useSelector((state: RootState) => state.matches);

  const sortedMatches = matchesData
    .slice()
    .sort(
      (a: MatchInterface, b: MatchInterface) =>
        +new Date(a.date) - +new Date(b.date)
    );

  useEffect(() => {
    dispatch(loadMatchesThunk);
  }, [dispatch]);

  return (
    <>
      <Wrapper className="container">
        <Header title={"All Matches"} />
        {matchesData.length > 0 ? (
          <ul className="matches__list">
            {sortedMatches.map((partida) => (
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
          <Spinner />
        )}
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
    justify-content: space-around;
    align-items: center;
  }
`;
