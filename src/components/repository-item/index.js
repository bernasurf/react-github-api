import React from 'react';
import * as S from './styled';

const RepositoryItem = ({ name, linkToRepo, fullRepoName, repoDescription }) => {
  return (
    <S.Wrapper>
      <h2> { name } </h2>
      <span>Link: <a href={linkToRepo} target="_blank" rel="noreferrer">{ fullRepoName }</a></span>
      <p>{repoDescription}</p>
    </S.Wrapper>
  )
}

export default RepositoryItem
