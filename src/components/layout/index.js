import React from 'react'
import useGithub from '../../hooks/github-hooks';
import Header from '../header';
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
      ) : <div><h2> Welcome to our Interface to Github API</h2><h3>Please use the Search Above to get info from a github user</h3> </div> }
    </S.Container>
  )
}

export default Layout;