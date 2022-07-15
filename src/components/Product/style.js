import styled from "styled-components";

export const Container = styled.li`
  width: 290px;
  margin: 10px;

  display: grid;
  grid-template-columns: 1fr;

  border-radius: 10px;

  figure {
    height: 100%;

    background: rgb(46, 53, 71);
    background: linear-gradient(
      179deg,
      rgba(46, 53, 71, 1) 0%,
      rgba(236, 189, 118, 1) 92%,
      rgba(177, 116, 37, 1) 100%
    );
    border-radius: 10px 10px 0px 0px;

    img {
      width: 200px;

      display: block;
      margin: 0 auto;
    }
  }
  div {
    background-color: var(--content-color);

    border-radius: 0px 0px 8px 8px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    div {
      width: 100%;
      padding: 0px 20px;
      p {
        font-size: 22px;
        padding: 8px;

        color: var(--content-text-color);
      }
      p:nth-child(2) {
        font-size: 18px;
      }
      p:last-child {
        font-weight: bold;
      }
    }
    button {
      width: 210px;
      height: 45px;
      margin-top: 10px;
      margin-bottom: 16px;

      font-size: 16px;

      align-self: center;

      background-color: var(--content-text-color);
      border-radius: 8px;

      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
