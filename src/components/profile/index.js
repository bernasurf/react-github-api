import React from 'react'
import * as S from './styled';

const Profile = () => {
  return (
    <S.Wrapper>    
      <S.WrapperImage src="https://avatars.githubusercontent.com/u/67717387?v=4" alt="User Avatar" />
      <S.WrapperInfoUser>
        <div>  
          <h1>Nome Usuario</h1>
          <S.WrapperUserItem>
            <h3>Username: </h3>
            <a href="https://www.github.com/bernasurf" target="_blank" rel="noreferrer">username</a>
          </S.WrapperUserItem>
        </div>
        <S.WrapperUserNumbers>
          <div>
            <h4>Followers</h4>  
            <span>#6</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>#3</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>#10</span>
          </div>
          <div>
            <h4>Gists</h4>
            <span>#7</span>
          </div>
          <div>
            <h4>Repos</h4>
            <span>#20</span>
          </div>
        </S.WrapperUserNumbers>
      </S.WrapperInfoUser>
    </S.Wrapper>
  )
}

export default Profile;
