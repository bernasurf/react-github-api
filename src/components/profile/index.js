import React from 'react'
import * as S from './styled';

const Profile = () => {
  return (
    <S.Wrapper>    
      <img src="https://avatars.githubusercontent.com/u/67717387?v=4" alt="User Avatar" />
        <div>  
          <h1>Nome Usuario</h1>
          <S.WrapperUserName>
            <h3>Username: </h3>
            <span>username</span>
          </S.WrapperUserName>
        </div>
        <S.WrapperUserNumbers>
          <div>
            <h4>Followers</h4>  
            <span>#followers</span>
          </div>
          <div>
            <h4>Starred</h4>
            <span>#starred</span>
          </div>
          <div>
            <h4>Following</h4>
            <span>#following</span>
          </div>  
        </S.WrapperUserNumbers>
        <div>Repositories</div>
        <div>Starreds</div>
    </S.Wrapper>
  )
}

export default Profile;
