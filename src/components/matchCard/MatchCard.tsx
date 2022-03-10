import { useDispatch } from "react-redux";
import styled from "styled-components";
import { deleteMatchThunk } from "../../redux/thunks/matchThunk";
import { MatchInterface } from "../../utils/types/matchInterface";

const MatchCard = ({
  gameTitle,
  image,
  date,
  maxPlayers,
  players,
  location,
  id,
}: MatchInterface): JSX.Element => {
  const dispatch = useDispatch();

  const deleteMatch = (id: string) => {
    dispatch(deleteMatchThunk(id));
  };

  return (
    <Card className="card">
      <Cardbody className="card__body">
        <img className="card__gameimage" src={image} alt={gameTitle} />
        <CardDate className="card__gamedate">
          {new Intl.DateTimeFormat("en-GB", {
            dateStyle: "full",
            timeStyle: "short",
          }).format(Date.parse(date))}
        </CardDate>
        <CardGameTitle className="card__gametitle">{gameTitle}</CardGameTitle>

        <CardPlayers className="card__players">
          <img
            className="card__players--playerimage"
            src={
              "https://images.generated.photos/wMYFoRC5e6yEtisDvXdfWot_TxmVmrZDSYc3Z8NeRk0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTkxMDA3LmpwZw.jpg"
            }
            alt={"player"}
          />
        </CardPlayers>

        <CardLocation className="card__location">
          <p className="card__location--city">{location}</p>
        </CardLocation>
        <p className="card__delete" onClick={() => deleteMatch(id)}>
          DELETE
        </p>
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
  cursor: pointer;
  transition: transform 200ms ease-in;

  img {
    height: 10rem;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Cardbody = styled.article`
  padding: 1rem;
`;

const CardDate = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.text};
  margin: 0.5rem 0;
`;

const CardGameTitle = styled.h2`
  font-weight: 900;
  color: ${(props) => props.theme.text};
  margin: 0.3rem 0;
`;

const CardPlayers = styled.div`
  margin: 0.5rem 0rem 0.5rem 0rem;

  .card__players--playerimage {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const CardLocation = styled.div`
  font-weight: 400;
  margin: 0.5rem 0;
  color: ${(props) => props.theme.lightText};

  .card__delete {
    font-weight: 400;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.lightText};
  }
`;
