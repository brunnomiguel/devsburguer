import styled from "styled-components";

export const StyledButton = styled.button`
  width: auto;
  background-color: transparent;

  svg {
    font-size: 28px;
    color: var(--content-text-color);
    transform: translatey(5px);

    opacity: 0.7;

    &:hover {
      opacity: 1;
    }
  }
`;
