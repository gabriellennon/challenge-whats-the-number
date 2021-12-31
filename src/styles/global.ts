import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: linear-gradient(180deg, #EEEEEE 0%, #FFFFFF 100%);
        --background-light: #f0f2f5;
        --red: #CC3300;
        --green: #32BF00;
        --orange: linear-gradient(180deg, #EF6C00 100%, #DB6300 100%);
        --button-linear-orange: linear-gradient(180deg, #EF6C00 0%, #C0661C 100%);

        --black: #262A34;
        --grey-button: linear-gradient(180deg, #434854 0%, #9E9E9E 100%);

        --shape: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            /* percent will increase will base in the general percent */
            /* 15px */
            font-size: 93.75%; 
        }

        @media (max-width: 720px) {
            /* 14px */
            font-size: 87.5%; 
        }
    }

    body {
        background: var(--background);
        /* in chrome browser detail fonts */
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1,  h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`;