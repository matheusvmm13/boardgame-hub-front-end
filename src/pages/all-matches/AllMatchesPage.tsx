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

  console.log(matchesData);

  return (
    <>
      <Header title={"All Matches"} />
      <MatchCard />
    </>
  );
};
export default AllMatchesPage;
