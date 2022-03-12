import styled from "styled-components";
import FormMatch from "../../components/form/FormMatch";
import Header from "../../components/header/Header";

const NewMatchPage = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiRXJpYyBMYW5nIiwiaWQiOiI2MjJhMzRlZjU1YzE1YjgyMGVkYzlhM2UiLCJpYXQiOjE2NDcwOTg1OTl9.mySIm1UGEEUtaZsa6pRVzTl3bTgssQfcIl2W_SOe6ho";

  localStorage.setItem("token", token);

  return (
    <>
      <Wrapper className="container">
        <Header title={"New Match"} />
        <FormMatch />
      </Wrapper>
    </>
  );
};

export default NewMatchPage;

const Wrapper = styled.section`
  min-height: 100vh;

  .matches__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
