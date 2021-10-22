import React from 'react'
import useGithub from '../../hooks/github-hooks';
import Header from '../header';
import * as S from './styled';

function Layout({ children }) {

  const { githubState } = useGithub();
  return (
    <S.Container>
      <Header />
      { githubState.loading ? <p>Loading...</p> : <> { children } </> }
    </S.Container>
  )
}

export default Layout;