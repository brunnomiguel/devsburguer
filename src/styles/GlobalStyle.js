import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        box-sizing: border-box;
    }
    :root {
        --primary-color: #9C251C;
        --secondary-color: #ED382B;
        --content-color: #591202;
        --title-color: #F2B705;
        --content-text-color: #FEFEFE;
        --background-color: #171B27;
    }
    body {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;

        background-color: var(--background-color);
    }
    body, button, a, input {
        font-family: "Montserrat", sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Kdam Thmor Pro', sans-serif;
    }
    button {
        cursor: pointer;
    }
    li {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`;
