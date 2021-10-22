import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {

  const { githubState, getUserRepos } = useGithub();
  const [ LoadedUserForRepos, setLoadedUserForRepos] = useState(false);
  

  useEffect(() => {
    if (!!githubState.user.login) {
      getUserRepos(githubState.user.login);
    }
    setLoadedUserForRepos(githubState.repositories);
  }, [githubState.user.login]);

  return (
    <> 
      <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"  
      >
        <S.WrapperTabList>
          <S.WrapperTab>Repositories</S.WrapperTab>
          <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
          <S.WrapperList>
            {githubState.repositories.map((item) => (
                    <RepositoryItem
                      key={item.id}
                      name={item.name}
                      linkToRepo={item.html_url}
                      fullRepoName={item.full_name}
                      repoDescription={item.description}
                    />
                  ))}
          </S.WrapperList>
        </S.WrapperTabPanel>
        <S.WrapperTabPanel><RepositoryItem name="repo 2" linkToRepo="https://wwww.github.com/linkRepo2" fullRepoName="FullNameRepo2"/></S.WrapperTabPanel>
      </S.WrapperTabs>
    </>
  )
}

export default Repositories;
