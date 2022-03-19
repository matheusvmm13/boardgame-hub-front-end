import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { RootState } from "../../redux/reducers";
import Spinner from "../../components/spinner/Spinner";
import { loadMatchesInfoThunk } from "../../redux/thunks/matchThunk";
import { useParams } from "react-router-dom";
import { MatchInterface } from "../../utils/types/matchInterface";

const MatchInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const matchData = useSelector((state: RootState) => state.matchInfo);
  console.log(matchData);

  useEffect(() => {
    dispatch(loadMatchesInfoThunk(id as string));
  }, [dispatch, id]);

  return (
    <>
      <Wrapper className="container">
        <Header title={"All Matches"} />
        <p>{(matchData as MatchInterface).gameTitle}</p>
        {matchData ? <ul className="matches__list"></ul> : <Spinner />}
      </Wrapper>
    </>
  );
};
export default MatchInfoPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`;
