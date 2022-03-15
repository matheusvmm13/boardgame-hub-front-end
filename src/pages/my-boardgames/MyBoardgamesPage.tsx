import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import jwtDecode from "jwt-decode";
import { DecodedToken } from "../../components/form/FormMatch";
import Header from "../../components/header/Header";
import { RootState } from "../../redux/reducers";
import { loadMyMatchesThunk } from "../../redux/thunks/matchThunk";
import BoardgameCard from "../../components/boardgameCard/BoardgameCard";

const MyMatchesPage = () => {
  const dispatch = useDispatch();
  const myGamesData = useSelector((state: RootState) => state.games);

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
        <ul className="matches__list"></ul>
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
`;
