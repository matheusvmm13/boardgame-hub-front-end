import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addGameThunk } from "../../redux/thunks/baordgameThunks";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";

const BoardgameCard = ({
  name,
  image_url,
  min_players,
  max_players,
  max_playtime,
  _id,
}: BoardgameInterface): JSX.Element => {
  const dispatch = useDispatch();

  const addNewBoardgame = (
    boardgameName: Partial<BoardgameInterface> | string
  ) => {
    console.log("Dispatched!");
    dispatch(addGameThunk(boardgameName));
  };

  return (
    <Card className="card">
      <Cardbody className="card__body">
        <img className="card__gameimage" src={image_url} alt={name} />
        <CardInfo>
          <CardGameTitle className="card__gametitle">{name}</CardGameTitle>
          <CardMaxPlayers className="card__playtime">
            <p className="card__playtime--minutes">
              {min_players} - {max_players} Players
            </p>
          </CardMaxPlayers>

          <CardMaxPlayTime className="card__playtime">
            <p className="card__playtime--minutes">{max_playtime} Minutes</p>
          </CardMaxPlayTime>
        </CardInfo>
        <AddButton className="card__add" onClick={() => addNewBoardgame(name)}>
          ADD
        </AddButton>
      </Cardbody>
    </Card>
  );
};

export default BoardgameCard;

const Card = styled.li`
  list-style: none;
  max-width: 450px;
  min-width: 450px;
  min-height: 150px;
  margin: 1rem 1.5rem;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  box-shadow: 1px 3px 20px #9e9e9e;
  border-radius: 20px;
  transition: transform 200ms ease-in;

  img {
    height: 8rem;
    margin-right: 1rem;
    object-fit: cover;
    border-radius: 10px;
    align-self: center;
  }
`;

const Cardbody = styled.article`
  padding: 1rem;
  display: flex;
  flex-grow: 1;
`;

const AddButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  min-width: 75px;
  max-width: 75px;
  min-height: 35px;
  max-height: 35px;
  color: #fff;
  font-weight: 900;
  font-family: inherit;
  font-size: 1.3rem;
  margin: 1rem 1rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    color: #fff;
    filter: brightness(95%);
  }
  &:active {
    transform: scale(0.99);
    background-color: darken(#3d50df, 25%);
    box-shadow: 0 1px 10px #d6d6d6;
  }
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 1;

  .card__playtime--minutes {
    margin: 0px;
    color: ${(props) => props.theme.text};
  }
`;

const CardGameTitle = styled.h2`
  font-weight: 900;
  color: ${(props) => props.theme.text};
  margin: 0.3rem 0;
  display: flex;
  flex-wrap: wrap;
`;

const CardMaxPlayers = styled.div`
  margin: 0.5rem 0rem 0.5rem 0rem;
`;

const CardMaxPlayTime = styled.div`
  margin: 0.1rem 0rem 0.1rem 0rem;
`;
