import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #ffffff;
        --background: #F7F7F7;
        --transparentBackground: rgba(196,196,196,0.3);
        --primary: #1268EA;
        --textTitle: #444444;
        --font: #F7F7F7;
        --gray: #D3D3D3;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        outline: unset;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;

        &.light {
            color: var(--textTitle);
        }

        &.dark {
            color: var(--font);
        }
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`;

export default GlobalStyles;
