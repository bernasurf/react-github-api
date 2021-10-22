import React from 'react'
import * as S from './styled';

const Header = () => {
  return (
      <header>
        <S.WrapperHeader>
          <input type="text" placeholder="Type Github user and hit search button"></input>
          <button type="submit">Search</button>
        </S.WrapperHeader>
      
      </header>
  )
}

export default Header;
