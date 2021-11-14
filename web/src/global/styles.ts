import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        @media (max-width: 425px) {
            --topBarHeight: 50px;
        }

        --white: #ffffff;
        --background: #F7F7F7;
        --transparentBackground: rgba(196,196,196,0.3);
        --darkPrimary: #0B4498;
        --primary: #1268EA;
        --lightPrimary: #9FC6FF;
        --textTitle: #444444;
        --font: #F7F7F7;
        --gray: #D3D3D3;
        --red: #F03327;
        --lightRed: #FFB0B0;

        --topBarHeight: 65px;
        --contentHeight: calc(100vh - var(--topBarHeight));
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        position: relative;
    }

    #root {
        width: 320px;
        height: 627px;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }

        @media(max-width: 720px){
            font-size: 87.5%;
        }

        h1 {
            font-size: 1.5rem;
        }
        h2 {
            font-size: 1.3rem;
        }
        h3 {
            font-size: 1.2rem;
        }
        h4 {
            font-size: 1.1rem;
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

    /* width */
    ::-webkit-scrollbar {
        width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: var(--background); 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        border-radius: 30px;
        background: var(--primary); 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: var(--lightPrimary); 
    }

`;

export default GlobalStyles;
