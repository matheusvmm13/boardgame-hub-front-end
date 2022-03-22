import * as React from "react";
import styled from "styled-components";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import { MatchInterface } from "../../utils/types/matchInterface";
import { updateMyMatchThunk } from "../../redux/thunks/matchThunk";
import { useParams } from "react-router-dom";

const EditForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const initialValues: Partial<MatchInterface> = {
    date: "",
    maxPlayers: 0,
    location: "",
  };

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(
          values: Partial<MatchInterface>,
          { setSubmitting }: FormikHelpers<Partial<MatchInterface>>
        ) => {
          setSubmitting(false);
          dispatch(updateMyMatchThunk(values, id as string));
        }}
      >
        <Form>
          <StyledForm>
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
              min={1}
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

          <FormButton type="submit" className="button__submit">
            Update Match
          </FormButton>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default EditForm;

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
