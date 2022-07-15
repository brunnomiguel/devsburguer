import styled from "styled-components";

export const InputContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 310px;
  height: 45px;
  margin-right: 14px;

  div {
    width: 100%;
    height: 100%;
    padding: 10px;

    border-top: 2px solid var(--content-text-color);
    border-bottom: 2px solid var(--content-text-color);
    border-left: 2px solid var(--content-text-color);
    border-radius: 6px 0px 0px 6px;

    input {
      width: 90%;

      background-color: transparent;
      color: var(--content-text-color);
      font-size: 20px;

      &::placeholder {
        color: var(--content-text-color);
        font-size: 14px;
      }
    }
  }
  button {
    width: 20%;
    height: 100%;

    opacity: 1;

    border-radius: 0px 6px 6px 0px;
    border-top: 2px solid var(--content-text-color);
    border-bottom: 2px solid var(--content-text-color);
    border-right: 2px solid var(--content-text-color);
    background-color: transparent;

    svg {
      font-size: 24px;
      color: var(--content-text-color);
      transform: translatey(1.5px);

      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
