import styled from "styled-components";

const MatchCard = (): JSX.Element => {
  return (
    <Card className="card">
      <Cardbody className="card__body">
        <img
          className="card__gameimage"
          src={
            "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg"
          }
          alt={"Dune imperium"}
        />
        <CardDate className="card__gamedate">Mar 09 2022 - 16:30</CardDate>
        <CardGameTitle className="card__gametitle">Dune Imperium</CardGameTitle>

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
          <p className="card__location--city">Barcelona</p>
        </CardLocation>
      </Cardbody>
    </Card>
  );
};

export default MatchCard;

const Card = styled.section`
  max-width: 330px;
  max-height: 340px;
  margin: 1rem 1rem;
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
`;
