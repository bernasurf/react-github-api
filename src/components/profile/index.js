import React from 'react'
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

const Profile = () => {

  const { githubState } = useGithub();

  return (
    <S.Wrapper>    
      <S.WrapperImage src={githubState.user.avatar_url} alt="User Avatar" />
      <S.WrapperInfoUser>
        <div>  
          <h1>{githubState.user.name}</h1>
          <S.WrapperUserItem>
            <h3>Username: </h3>
            <a href={githubState.user.html_url} target="_blank" rel="noreferrer">{ githubState.user.login }</a>
          </S.WrapperUserItem>
        </div>
          <S.WrapperUserItem>
            <h3>Company: </h3>
            <span> { githubState.user.company }</span>
          </S.WrapperUserItem>
          <S.WrapperUserItem>
            <h3>Location: </h3>
            <span> { githubState.user.location }</span>
          </S.WrapperUserItem>
          <S.WrapperUserItem>
            <h3>Website: </h3>
            <a href={githubState.user.blog} target="_blank" rel="noreferrer">{ githubState.user.blog }</a>
          </S.WrapperUserItem>
        <S.WrapperUserNumbers>
          <div>
            <h4>Followers</h4>  
            <span>{ githubState.user.followers }</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>{ githubState.user.following }</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>{ githubState.user.public_gists }</span>
          </div>
          <div>
            <h4>Public Repos</h4>
            <span>{ githubState.user.public_repos }</span>
          </div>
        </S.WrapperUserNumbers>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile;
