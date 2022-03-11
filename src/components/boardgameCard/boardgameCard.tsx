import styled from "styled-components";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";

const BoardgameCard = ({
  name,
  image_url,
  min_players,
  max_players,
  max_playtime,
}: BoardgameInterface): JSX.Element => {
  return (
    <Card className="card">
      <Cardbody className="card__body">
        <img className="card__gameimage" src={image_url} alt={name} />
        <CardGameTitle className="card__gametitle">{name}</CardGameTitle>

        <CardMaxPlayers className="card__location">
          <p className="card__location--city">
            {min_players} - {max_players} Players
          </p>
        </CardMaxPlayers>

        <CardMaxPlayTime className="card__playtime">
          <p className="card__playtime--minutes">{max_playtime} Minutes</p>
        </CardMaxPlayTime>

        <p className="card__add" onClick={() => console.log("Added")}>
          ADD
        </p>
      </Cardbody>
    </Card>
  );
};

export default BoardgameCard;

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

  .card__add {
    font-weight: 400;
    margin: 0.5rem 0;
    color: ${(props) => props.theme.lightText};
    &:hover {
      color: #000;
    }
  }
`;

const CardGameTitle = styled.h2`
  font-weight: 900;
  color: ${(props) => props.theme.text};
  margin: 0.3rem 0;
`;

const CardMaxPlayers = styled.div`
  margin: 0.5rem 0rem 0.5rem 0rem;
`;

const CardMaxPlayTime = styled.div`
  margin: 0.5rem 0rem 0.5rem 0rem;
`;
