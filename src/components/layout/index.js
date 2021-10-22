import React from 'react'
import Header from '../header';
import * as S from './styled';

function Layout({ children }) {
  return (
    <S.Container>
      <Header> </Header>
      {children}
    </S.Container>
  )
}

export default Layout;