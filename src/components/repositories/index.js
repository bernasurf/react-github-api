import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"  
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel><RepositoryItem name="repo 1" linkToRepo="https://wwww.github.com/linkRepo1" fullRepoName="FullNameRepo1"/></S.WrapperTabPanel>
      <S.WrapperTabPanel><RepositoryItem name="repo 2" linkToRepo="https://wwww.github.com/linkRepo2" fullRepoName="FullNameRepo2"/></S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories;
