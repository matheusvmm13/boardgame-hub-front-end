import styled from "styled-components";
import { RiCalendarLine, RiUser3Line, RiMapPinLine } from "react-icons/ri";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import { loadMatchesInfoThunk } from "../../redux/thunks/matchThunk";
import { useParams } from "react-router-dom";
import { MatchInterface } from "../../utils/types/matchInterface";
import { CreatorInterface } from "../../utils/types/userInterface";
import Header from "../../components/header/Header";
import Spinner from "../../components/spinner/Spinner";
import Map from "../../components/map/Map";

const MatchInfoPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const matchData = useSelector((state: RootState) => state.matchInfo);
  const matchCreator = (matchData as MatchInterface).creator;

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
            {(matchData as MatchInterface).date ? (
              <InfoText className="card__gamedate">
                {new Intl.DateTimeFormat("en-ES", {
                  dateStyle: "full",
                  timeStyle: "short",
                }).format(Date.parse((matchData as MatchInterface).date))}
              </InfoText>
            ) : (
              <InfoText>loading date...</InfoText>
            )}

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

          <div className="button--wrapper">
            <RequestButton className="button__request" onClick={() => "Join"}>
              REQUEST TO JOIN
            </RequestButton>
          </div>
          <InfoContainer className="location--container">
            {(matchData as MatchInterface).location !== undefined ? (
              <Map
                matchLocation={(matchData as MatchInterface).location as string}
              />
            ) : (
              <div>Loading Map...</div>
            )}
          </InfoContainer>
        </Wrapper>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default MatchInfoPage;

const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  img {
    height: 12rem;
    width: 100%;
    object-fit: cover;
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    img {
      object-fit: contain;
    }

    .button--wrapper {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const InfoContainer = styled.section`
  padding: 0.6rem 2rem;

  .remix-icon {
    &__calendar {
      color: ${(props) => props.theme.primary};
      margin-top: 0.7rem;
    }
    &__user {
      color: ${(props) => props.theme.primary};
      margin-top: 0.7rem;
    }
    &__map {
      color: ${(props) => props.theme.primary};
      margin-top: 0.7rem;
    }
  }
`;

const InfoText = styled.p`
  padding: 0 0.3rem 0.3rem 0;
  margin: 0.5rem 0 1rem 0;
`;

const RequestButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  padding: 0.6rem 2rem;
  width: 270px;
  height: 60px;
  color: #fff;
  font-weight: 900;
  font-family: inherit;
  font-size: 1.3rem;
  margin: 0.2rem 1.5rem;
  border: none;
  border-radius: 15px;

  &:hover {
    color: #fff;
    filter: brightness(95%);
  }
  &:active {
    transform: scale(0.99);
    background-color: darken(#3d50df, 25%);
    box-shadow: 0 1px 20px #d6d6d6;
  }

  @media screen and (min-device-width: 320px) and (max-width: 768px) {
  }
`;
