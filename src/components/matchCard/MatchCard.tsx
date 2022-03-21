import styled from "styled-components";
import { GiMeeple } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { deleteMatchThunk } from "../../redux/thunks/matchThunk";
import { MatchInterface } from "../../utils/types/matchInterface";
import { RootState } from "../../redux/reducers";
import { useLocation, useNavigate } from "react-router-dom";

const MatchCard = ({
  gameTitle,
  image,
  date,
  maxPlayers,
  players,
  location,
  id,
}: MatchInterface): JSX.Element => {
  const user = useSelector((state: RootState) => state.users);
  const locationPath = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteMatch = (id: string) => {
    dispatch(deleteMatchThunk(id));
  };

  const updateMatch = (id: string) => {
    navigate(`edit/${id}`);
  };

  const matchInfo = (id: string) => {
    navigate(`${id}`);
  };

  return (
    <Card className="card">
      <Cardbody className="card__body">
        <img
          className="card__gameimage"
          src={image}
          alt={gameTitle}
          onClick={() => matchInfo(id)}
        />
        {date !== null && (
          <CardDate className="card__gamedate">
            {new Intl.DateTimeFormat("en-ES", {
              dateStyle: "full",
              timeStyle: "short",
            }).format(Date.parse(date))}
          </CardDate>
        )}

        <CardGameTitle className="card__gametitle">{gameTitle}</CardGameTitle>

        <CardPlayersWrapper>
          <p className="card__player--max">Max Players</p>
          {/* <p className="card__player--number">{players.length}</p> */}
          {Array.from(Array(maxPlayers)).map((player, index) => (
            <CardPlayers key={index} className="card__players">
              <GiMeeple className="icon__meeple" />
            </CardPlayers>
          ))}
        </CardPlayersWrapper>

        <CardLocation className="card__location">
          <p className="card__location--city">{location}</p>
        </CardLocation>
        {locationPath.pathname === "/my-matches" && (
          <p className="card__delete" onClick={() => updateMatch(id as string)}>
            EDIT
          </p>
        )}

        {user.loggedIn && locationPath.pathname === "/my-matches" && (
          <p className="card__delete" onClick={() => deleteMatch(id as string)}>
            DELETE
          </p>
        )}
      </Cardbody>
    </Card>
  );
};

export default MatchCard;

const Card = styled.li`
  list-style: none;
  max-width: 330px;
  min-width: 330px;
  min-height: 280px;
  margin: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 1px 3px 20px #9e9e9e;
  border-radius: 20px;
  transition: transform 200ms ease-in;

  img {
    height: 10rem;
    width: 100%;
    object-fit: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Cardbody = styled.article`
  padding: 1rem;

  .card__delete {
    font-weight: 400;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.lightText};
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
`;

export const CardDate = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;
`;

const CardGameTitle = styled.h2`
  font-weight: 900;
  color: ${(props) => props.theme.text};
  margin: 0.3rem 0;
`;

const CardPlayersWrapper = styled.article`
  display: flex;
  align-items: center;

  .card__maxplayers {
    margin: 1px 5px;
    color: ${(props) => props.theme.text};
  }

  .card__player--number {
    margin: 0.5rem 0.5rem 0.5rem 0rem;
  }

  .card__player--max {
    margin: 0.5rem 0.5rem 0.5rem 0rem;
  }
`;

const CardPlayers = styled.div`
  margin: 0.5rem 0.3rem 0.5rem 0rem;
  align-items: center;

  .card__players--playerimage {
    height: 1.8rem;
    width: 1.8rem;
    margin-right: 0.2rem;
    border-radius: 20%;
    border: 1.5px solid ${(props) => props.theme.lightText};
    object-fit: cover;
  }

  .icon__meeple {
    color: ${(props) => props.theme.lightText};
    height: 1.3rem;
    width: 100%;
  }
`;

const CardLocation = styled.div`
  font-weight: 400;
  margin: 0.5rem 0;
  color: ${(props) => props.theme.lightText};
`;
