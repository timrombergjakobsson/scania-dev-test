import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --blue-900: #041E42;
    --blue-100: #E0E2EB;
    --blue-200: #C1C6D8;
    --blue-600: #2058A8;
    --grey-800: #37414F;
    --grey-100: #EDEFF3;
    --grey-700: #56657A;
    --grey-400: #CDD1DB;
    --grey-300: #DBDFE6;
    --grey-900: #171719;
    --grey-600:  #868FA2;
    --wild-sand: #F5F5F5;
  }

body {
  background: var(--wild-sand);
}

h1 {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  margin: 22px 0 22px 40px;

  letter-spacing: -0.04em;
  color: var(--blue-900);
}

p {
  margin: 24px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: -0.01em;

  color: var(--white);
}

main {
  position: relative;
  margin-top: 120px;
}

`;

export default GlobalStyles;
