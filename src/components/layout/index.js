import React from 'react'
import * as S from './styled';

function Layout({ children }) {
  return (
    <S.Container>
      <header>Header</header>
      {children}
    </S.Container>
  )
}

export default Layout;