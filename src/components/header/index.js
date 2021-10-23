import React, { useState } from 'react'
import * as S from './styled';
import useGithub from '../../hooks/github-hooks';

const Header = () => {

  const { getUser } = useGithub();
  const [ usernameForSearch, setUsernameForSearch ] = useState('')

  const submitGetUser = (username) => {

    if( !usernameForSearch) return;
    console.log(usernameForSearch)
    return getUser(usernameForSearch)
  }

  const handleKeyPress = (target) => {
    if(target.charCode===13){
      submitGetUser();    
    } 
  }

  return (
      <header>
        <S.WrapperHeader>
          <input type="text" placeholder="Type Github user and hit search button" onKeyPress={handleKeyPress} onChange={(e) => setUsernameForSearch(e.target.value)}></input>
          <button type="submit" onClick={submitGetUser}>Search</button>
        </S.WrapperHeader>
      
      </header>
  )
}

export default Header;
