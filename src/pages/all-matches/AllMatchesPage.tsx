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
      <section className="container">
        <Header title={"All Matches"} />
        <ul className="d-flex flex-row justify-content-around align-items-center flex-wrap">
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
      </section>
    </>
  );
};
export default AllMatchesPage;
