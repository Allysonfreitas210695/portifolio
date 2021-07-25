import React from 'react';
import Menu from '../Menu/index'
import styled from 'styled-components';

const HeaderStyle = styled.header`
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #4f36a8;
  padding: 7px;

  h1{
    font-size: 1.3rem;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  }

  @media(max-width: 680px) {
    height: 50px;

  h1{
    font-size: 12px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
  }

`;

export default function Header() {
  return (
      <HeaderStyle>
        <h1>Allyson DevJr.</h1>
        <Menu/>
      </HeaderStyle>

  )
}
