import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    max-width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;
