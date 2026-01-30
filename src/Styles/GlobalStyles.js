import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --bg-primary: #0A001B;
    --bg-card: #1C2E59;
    --text-primary: #F0F4F8;
    --text-body: #E2E8F0;
    --accent: #38BDF8;
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    -webkit-font-smoothing:antialiased;

    background-color:var(--bg-primary);
    color:var(--text-body);

}

h1,h2,h3{
    color:var(--text-primary);
}

a {
    text-decoration: none;
}

a:hover {
    filter:brightness(1.2);
}

ul {
    list-style: none;
}
`

export default GlobalStyle;