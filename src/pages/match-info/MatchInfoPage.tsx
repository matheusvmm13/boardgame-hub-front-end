import styled from "styled-components";
import {
  RiCalendarLine,
  RiUser3Line,
  RiMapPinLine,
  RiTeamLine,
} from "react-icons/ri";
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
import toast from "react-hot-toast";

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
          <Header
            title={`Next Match: ${(matchData as MatchInterface).gameTitle}`}
          />
          <div className="container--information--location">
            <InfoContainer className="information--container">
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

              <RiTeamLine className="remix-icon__map" size={25} />
              <InfoText>
                Players: 2 - {(matchData as MatchInterface).maxPlayers}
              </InfoText>
            </InfoContainer>

            <InfoContainer className="location--container">
              {(matchData as MatchInterface).location !== undefined ? (
                <Map
                  matchLocation={
                    (matchData as MatchInterface).location as string
                  }
                />
              ) : (
                <div>Loading Map...</div>
              )}
            </InfoContainer>
            <div className="button--wrapper">
              <RequestButton
                className="button__request"
                onClick={() =>
                  toast.success("Your request was sent to the organizer!")
                }
              >
                REQUEST TO JOIN
              </RequestButton>
            </div>
          </div>
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
  padding: 0 3rem;
  display: flex;
  flex-direction: column;

  img {
    height: 12rem;
    min-width: 90%;
    margin: 3rem 2.3rem 0 2.3rem;
    border-radius: 15px;
    border: 2px solid ${(props) => props.theme.primary};
    object-fit: cover;
  }

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .container--information--location {
    display: flex;
  }

  .button--wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 1rem;
  }

  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    img {
      object-fit: contain;
      padding: 0.5rem;
      margin: 1rem 1rem 0rem;
    }

    .container--information--location {
      display: block;
    }

    .button--wrapper {
      justify-content: center;
    }

    padding: 0rem;
  }
`;

const InfoContainer = styled.section`
  padding: 0.6rem 2rem;
  display: flex;
  flex-direction: column;

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
      margin-top: 0.7rem 0rem;
    }
  }
  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    // padding: 0rem;
  }
`;

const InfoText = styled.p`
  padding: 0 0.3rem 0.3rem 0;
  margin: 0.5rem 0 1rem 0;
`;

const RequestButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  margin: 0.2rem 0rem;
  width: 240px;
  height: 60px;
  color: #fff;
  font-weight: 900;
  font-family: inherit;
  font-size: 1rem;
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
    margin-bottom: 1rem;
  }
`;
