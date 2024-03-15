import styled, { createGlobalStyle } from 'styled-components';

import { theme } from './theme';

export default createGlobalStyle`
html {
	font-size: 10px;
	height: 100%;
}

body {
	height: 100%;
  margin: 0;
	color: ${theme.color.text};
  background-color: ${theme.color.background};
	font-weight: ${theme.fontWeight.normal};
	font-size: ${theme.fontSize.normal};
	font-family: 'Montserrat', sans-serif;
	min-width: 320px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
	color: inherit;
	text-decoration: inherit;
	color: ${theme.color.text};
}

ul, li {
	list-style: none;
}

img {
	display: block;
	max-width: 100%;
	height: auto;
}

`;

export const PageWrapper = styled.main`
  flex: 1;
`;
