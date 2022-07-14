import styled from "styled-components";

export const ContainerEmpty = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;
export const Content = styled.div`
  width: 275px;
  height: 170px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  p {
    font-size: 24px;
    color: var(--title-color);

    padding: 20px 0px 30px 0px;
  }

  button {
    width: 100%;
    height: 40px;

    align-self: center;

    border-radius: 6px;
    font-size: 16px;
    background-color: var(--content-text-color);

    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;
export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    max-width: 100%;

    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;
export const ResumeButton = styled.div`
  width: 100%;
  text-align: center;

  border-top: 3px solid var(--content-text-color);

  button {
    width: 200px;
    height: 30px;
    margin-bottom: 10px;

    background-color: var(--content-text-color);
    border-radius: 0px 0px 8px 8px;

    font-size: 18px;
  }
`;
