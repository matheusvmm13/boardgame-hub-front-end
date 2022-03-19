import styled from "styled-components";
import { RiCalendarLine, RiUser3Line, RiMapPinLine } from "react-icons/ri";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/header/Header";
import { RootState } from "../../redux/reducers";
import Spinner from "../../components/spinner/Spinner";
import { loadMatchesInfoThunk } from "../../redux/thunks/matchThunk";
import { useParams } from "react-router-dom";
import { MatchInterface } from "../../utils/types/matchInterface";
import MainButton from "../../components/button/MainButton";
import { CreatorInterface } from "../../utils/types/userInterface";
import { CardDate } from "../../components/matchCard/MatchCard";

const MatchInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const matchData = useSelector((state: RootState) => state.matchInfo);
  const matchCreator = (matchData as MatchInterface).creator;
  console.log(matchData);
  console.log(matchCreator);

  useEffect(() => {
    dispatch(loadMatchesInfoThunk(id as string));
  }, [dispatch, id]);

  return (
    <>
      {matchData ? (
        <Wrapper className="container">
          <img
            src={(matchData as MatchInterface).image}
            alt={(matchData as MatchInterface).gameTitle}
          />
          <Header title={(matchData as MatchInterface).gameTitle} />

          <InfoContainer className="location--container">
            <RiCalendarLine className="remix-icon__calendar" size={25} />
            <CardDate className="card__gamedate">
              {new Intl.DateTimeFormat("en-ES", {
                dateStyle: "full",
                timeStyle: "short",
              }).format(Date.parse((matchData as MatchInterface).date))}
            </CardDate>

            <RiUser3Line className="remix-icon__user" size={25} />
            {matchCreator ? (
              <InfoText>
                {(matchCreator as unknown as CreatorInterface).name}
              </InfoText>
            ) : (
              <InfoText>BoardgameHub User</InfoText>
            )}

            <RiMapPinLine className="remix-icon__map" size={25} />
            <InfoText>{(matchData as MatchInterface).location}</InfoText>
          </InfoContainer>

          <MainButton
            buttonText={"REQUEST TO JOIN"}
            actionOnClick={() => console.log("Hola")}
          ></MainButton>
        </Wrapper>
      ) : (
        <Spinner />
      )}
      )
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

  img {
    margin-top: 2rem;
    height: 12rem;
    width: 100%;
    object-fit: contain;
  }
`;

const InfoContainer = styled.section`
  padding: 0.6rem 2rem;

  .remix-icon {
    &__calendar {
      color: ${(props) => props.theme.primary};
    }
  }
  .remix-icon__user {
    color: ${(props) => props.theme.primary};
  }
  .remix-icon__map {
    color: ${(props) => props.theme.primary};
  }
`;

const InfoText = styled.p`
  padding: 0 1rem 1rem 0;
  margin: 0.5rem 0 1rem 0;
`;
