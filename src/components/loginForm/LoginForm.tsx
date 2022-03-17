import * as React from "react";
import styled from "styled-components";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useDispatch } from "react-redux";
import userLoginThunk from "../../redux/thunks/userThunk/userThunks";

interface Values {
  username: string;
  password: string;
}

const LoginForm: React.FC<{}> = () => {
  const dispatch = useDispatch();

  return (
    <FormWrapper>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        enableReinitialize={true}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setSubmitting(false);
          dispatch(userLoginThunk(values));
          console.log(values);
        }}
      >
        <Form>
          <StyledForm>
            <label htmlFor="username" className="form__label">
              Username
            </label>
            <Field
              className="field__form"
              id="username"
              name="username"
              type="text"
            />

            <label htmlFor="password" className="form__label">
              password
            </label>
            <Field
              className="field__form"
              id="password"
              name="password"
              type="password"
            />
          </StyledForm>

          <FormButton type="submit" className="button__submit">
            Login
          </FormButton>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default LoginForm;

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

const StyledForm = styled.form`
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
