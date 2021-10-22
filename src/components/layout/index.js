import React from 'react'
import useGithub from '../../hooks/github-hooks';
import Header from '../header';
import NoUser from '../NoUser';
import * as S from './styled';

function Layout({ children }) {

  const { githubState } = useGithub();
  return (
    <S.Container>
      <Header />
      { githubState.hasUser ? (
        <>
          { githubState.loading ? (
            <p>Loading...</p> 
          ) : ( 
            <> 
            { children } 
            </> 
          )}
        </>
      ) : <NoUser />}
    </S.Container>
  )
}

export default Layout;