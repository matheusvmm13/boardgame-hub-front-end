import * as React from "react";
import jwtDecode from "jwt-decode";
import styled from "styled-components";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { createMatchThunk } from "../../redux/thunks/matchThunk";
import { MatchInterface } from "../../utils/types/matchInterface";

interface MyFormValues extends MatchInterface {
  userid: string;
}

export interface DecodedToken {
  name: string;
  id: string;
  iat: number;
}

const FormMatch: React.FC<{}> = () => {
  const decoded = React.useRef<DecodedToken>({ name: "", id: "", iat: 0 });

  const dispatch = useDispatch();

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

  const token: string | null = localStorage.getItem("token");
  if (token !== null) {
    decoded.current = jwtDecode(token);
    initialValues.userid = decoded.current.id;
    initialValues.creator = decoded.current.id;
    initialValues.players.push(decoded.current.id);
  }

  return (
    <FormWrapper>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
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
            <label className="form__label" htmlFor="gameTitle">
              Choose one of your games
            </label>
            <Field
              className="field__form"
              id="gameTitle"
              name="gameTitle"
              placeholder="Which game"
              type="text"
            />

            <label className="form__label" htmlFor="date">
              Pick a date and time
            </label>
            <Field
              className="field__form"
              id="date"
              name="date"
              placeholder="Pick a date"
              type="datetime-local"
              min={new Date().toISOString().slice(0, -8)}
            />

            <label className="form__label" htmlFor="maxPlayers">
              Number of Players
            </label>
            <Field
              className="field__form"
              id="maxPlayers"
              name="maxPlayers"
              placeholder="Select the number of players"
              type="number"
              min={2}
            />

            <label className="form__label" htmlFor="location">
              Choose a location
            </label>
            <Field
              className="field__form"
              id="location"
              name="location"
              placeholder="Where"
              type="text"
            />
          </StyledForm>
          <button type="submit" className="button__submit">
            Create
          </button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default FormMatch;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: inherit;
`;

const StyledForm = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  font-family: inherit;
  text-align: center;

  .field__form {
    background-color: #eee;
    border: none;
    border-radius: 5px;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
    font-family: inherit;
  }

  .form__label {
    justify-content: flex-start;
    color: blue;
  }

  .button__submit {
    background-color: ${(props) => props.theme.primary};
    width: 270px;
    height: 60px;
    color: #fff;
    font-weight: 900;
    font-family: inherit;
    font-size: 1.3rem;
    padding: 0.6rem 2rem;
    margin: 2rem 1rem;
    border: none;
    border-radius: 15px;
  }
`;
