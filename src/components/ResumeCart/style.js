import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.7);
`;
const appear = keyframes`
  from{
    opacity: 0;
    transform: translateZ();
  }
  to{
    opacity: 1;
    transform: translateZ();
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;

  width: 300px;
  padding: 10px;

  background-color: #ffffff;
  border-radius: 6px;

  animation: ${appear} 2s;
`;
export const TitleContent = styled.div`
  width: 100%;
  height: 40px;
  padding: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: var(--text-icons-color);
    font-size: 25px;
  }

  button {
    width: auto;
    margin: 0;

    background-color: transparent;

    svg {
      transform: translatey(2.5px);
      color: var(--text-icons-color);
      font-size: 25px;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;

  span {
    display: flex;
    justify-content: space-between;

    padding: 5px;
  }

  ul {
    width: 100%;

    display: flex;
    flex-direction: column;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;

      border-bottom: 1px solid var(--background-color);

      p {
        padding: 5px;
        text-align: center;
      }
      div {
        width: 100%;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
  button {
    width: 100%;
    height: 35px;

    background-color: var(--background-color);
    color: var(--content-text-color);
    border-radius: 6px;

    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;
