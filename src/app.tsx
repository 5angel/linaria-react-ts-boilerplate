import React from 'react';

import { TitleStyled } from '@components/Title';
import { styled } from '@linaria/react';

const ContainerStyled = styled.div`
  text-align: center;

  ${TitleStyled} {
    color: blue;
  }
`;

const App = () => (
  <ContainerStyled>
    <TitleStyled>Hello world!</TitleStyled>
  </ContainerStyled>
);

export default App;
