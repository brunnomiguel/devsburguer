import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 2px solid var(--content-text-color);

  div {
    display: flex;
    width: 100%;
  }

  h1 {
    color: var(--content-text-color);
    font-size: 35px;
    margin-bottom: 10px;
    span {
      color: var(--title-color);
      font-size: 25px;
      padding-left: 4px;
    }
  }
  button {
    position: relative;

    span {
      position: absolute;
      top: -10px;
      right: -2px;

      border: 2px solid var(--title-color);
      border-radius: 50%;

      width: 24px;
      height: 24px;
      padding: 2px;

      font-size: 16px;
      color: var(--title-color);
    }
  }
  @media (min-width: 568px) {
    flex-direction: row;
    justify-content: space-between;

    div {
      width: auto;
    }

    h1 {
      margin-right: 10px;
    }
  }
`;
