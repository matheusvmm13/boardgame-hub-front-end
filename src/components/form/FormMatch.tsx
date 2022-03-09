import * as React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import MainButton from "../button/MainButton";

interface MyFormValues {
  gameTitle: string;
  date: string;
  maxPlayers: number;
  location: string;
}

const FormMatch: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    gameTitle: "",
    date: "",
    maxPlayers: 0,
    location: "",
  };
  return (
    <FormWrapper>
      <h1>My Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        <StyledForm>
          <label className="form__label" htmlFor="gameTitle">
            Choose one of your games
          </label>
          <Field
            id="gameTitle"
            name="gameTitle"
            placeholder="Which game"
            type="text"
          />

          <label className="form__label" htmlFor="date">
            Pick a date and time
          </label>
          <Field
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
            id="maxPlayers"
            name="maxPlayers"
            placeholder="Select the number of players"
            type="number"
            min={2}
          />
          <MainButton buttonText={"CREATE"} />
        </StyledForm>
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

  .form__label {
    justify-content: flex-start;
    color: blue;
  }
`;

const Field = styled.input`
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  font-family: inherit;
`;
