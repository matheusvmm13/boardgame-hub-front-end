import * as React from "react";
import jwtDecode from "jwt-decode";
import styled from "styled-components";
import Spinner from "../spinner/Spinner";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { createMatchThunk } from "../../redux/thunks/matchThunk";
import { MatchInterface } from "../../utils/types/matchInterface";
import { BoardgameInterface } from "../../utils/types/boardgameInterface";
import { Link } from "react-router-dom";

interface MyFormValues extends MatchInterface {
  userid: string;
}

export interface DecodedToken {
  name: string;
  id: string;
  iat: number;
}

const FormMatch: React.FC<{}> = () => {
  const dispatch = useDispatch();

  const decoded = React.useRef<DecodedToken>({ name: "", id: "", iat: 0 });

  const [boardgameResults, setBoardgameResults] = React.useState<
    BoardgameInterface[]
  >([]);

  React.useEffect(() => {
    (async (userId) => {
      const token: string | null = localStorage.getItem("token");
      if (token !== null) {
        const decodedToken: DecodedToken = jwtDecode(token);
        const userId = decodedToken.id;
        const response = await fetch(
          `${process.env.REACT_APP_PUBLIC_API}my-boardgames/${userId}`
        );
        const games = await response.json();
        setBoardgameResults(games);
      }
    })();
  }, []);

  const initialValues: MyFormValues = {
    gameTitle: "",
    id: "",
    userid: "",
    image: "",
    creator: "",
    date: "",
    maxPlayers: 0,
    players: [],
    location: "",
  };

  const [formData, setFormData] = React.useState(initialValues);

  const token: string | null = localStorage.getItem("token");
  if (token !== null) {
    decoded.current = jwtDecode(token);
    initialValues.userid = decoded.current.id;
    initialValues.creator = decoded.current.id;
    initialValues.players.push(decoded.current.id);
  }

  const changeData = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
    const selectedId = event.target.value;
    const selectedGameState = boardgameResults.filter(
      (game) => game.name === selectedId
    )[0];
    formData.gameTitle = selectedGameState.name as string;
    formData.image = selectedGameState.image_url as string;
    formData.maxPlayers = selectedGameState.max_players as number;
  };

  return (
    <FormWrapper>
      {boardgameResults ? (
        <Formik
          initialValues={initialValues}
          enableReinitialize={false}
          onSubmit={(
            values: MyFormValues,
            { setSubmitting }: FormikHelpers<MyFormValues>
          ) => {
            setSubmitting(false);
            dispatch(createMatchThunk(values));
          }}
        >
          <Form>
            <StyledForm>
              {boardgameResults.length > 0 && (
                <label className="form__label" htmlFor="gameTitle">
                  Choose one of your games
                </label>
              )}
              {boardgameResults.length > 0 ? (
                <Field
                  as="select"
                  className="field__form"
                  id="gameTitle"
                  name="gameTitle"
                  placeholder="Which game"
                  onChange={changeData}
                  value={formData.gameTitle}
                >
                  {boardgameResults.map((option, index) => (
                    <option
                      key={index}
                      value={option.name}
                      label={option.name}
                    />
                  ))}
                </Field>
              ) : (
                <Link to={"/all-boardgames"} className="form__label">
                  Add games to your collection first
                </Link>
              )}

              {boardgameResults.length > 0 && (
                <label className="form__label" htmlFor="date">
                  Pick a date and time
                </label>
              )}
              {boardgameResults.length > 0 && (
                <Field
                  className="field__form"
                  id="date"
                  name="date"
                  placeholder="Pick a date"
                  type="datetime-local"
                  min={new Date().toISOString().slice(0, -8)}
                />
              )}

              {boardgameResults.length > 0 && (
                <label className="form__label" htmlFor="maxPlayers">
                  Number of Players
                </label>
              )}

              {boardgameResults.length > 0 && (
                <Field
                  className="field__form"
                  id="maxPlayers"
                  name="maxPlayers"
                  placeholder="Select the number of players"
                  type="number"
                  min={1}
                  //max={formData?.maxPlayers}
                />
              )}

              {boardgameResults.length > 0 && (
                <label className="form__label" htmlFor="location">
                  Choose a location
                </label>
              )}
              {boardgameResults.length > 0 && (
                <Field
                  className="field__form"
                  id="location"
                  name="location"
                  placeholder="Where"
                  type="text"
                />
              )}
            </StyledForm>
            {boardgameResults.length > 0 && (
              <FormButton type="submit" className="button__submit">
                Create Match
              </FormButton>
            )}
          </Form>
        </Formik>
      ) : (
        <Spinner />
      )}
    </FormWrapper>
  );
};

export default FormMatch;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100vw;
  font-family: inherit;

  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    padding-right: 0rem;
  }
`;

const StyledForm = styled.section`
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;
  height: 100%;
  width: 36rem;
  text-align: center;
  font-family: inherit;

  .field__form {
    background-color: #eee;
    border: none;
    border-radius: 8px;
    padding: 12px 15px;
    margin: 8px 0;
    width: 90%;
    font-family: inherit;
  }

  .form__label {
    justify-content: flex-start;
    color: blue;
    line-height: 1.7rem;
  }

  @media screen and (min-device-width: 320px) and (max-width: 768px) {
    padding-right: 0rem;
    width: 24rem;
  }
`;

const FormButton = styled.button`
  background-color: ${(props) => props.theme.primary};
  width: 250px;
  height: 60px;
  color: #fff;
  font-weight: 900;
  font-family: inherit;
  font-size: 1.3rem;
  padding: 0.6rem 2rem;
  margin: 2rem 2rem;
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
    box-shadow: 0 1px 20px #d6d6d6;
  }
`;
