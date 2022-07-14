import styled from "styled-components";

export const CartContent = styled.li`
  height: 140px;
  margin: 0px 10px 10px 10px;

  display: flex;
  align-items: center;

  border-radius: 8px;

  figure {
    width: 30%;
    height: 100%;

    border-radius: 8px 0px 0px 8px;

    background: rgb(46, 53, 71);
    background: linear-gradient(
      179deg,
      rgba(46, 53, 71, 1) 0%,
      rgba(236, 189, 118, 1) 92%,
      rgba(177, 116, 37, 1) 100%
    );

    img {
      width: 100%;

      display: block;
      margin: 0 auto;
    }
  }

  div {
    width: 70%;
    height: 100%;
    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    background-color: var(--content-color);
    border-radius: 0px 8px 8px 0px;

    p {
      font-size: 20px;
      padding-bottom: 10px;
      color: var(--content-text-color);
    }

    div {
      width: 100%;
      padding: 0px 10px;

      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      &:first-child {

        flex-direction: column;
        align-items: flex-start;
        span {
          color: var(--content-text-color);
          padding: 4px;
          font-size: 18px;
        }
        svg {
          transform: translatey(2.5px);
          font-size: 18px;
          color: var(--background-color);
          border-radius: 50%;
          background-color: var(--content-text-color);
          padding: 4px;
        }

        @media(min-width: 480px) {
          flex-direction: row;
          align-items: center;
        }
      }

      svg {
        transform: translatey(-5px);
        font-size: 24px;
        color: var(--content-text-color);

        cursor: pointer;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;
