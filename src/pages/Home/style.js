import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
    gap: 10px;
  }
`;
