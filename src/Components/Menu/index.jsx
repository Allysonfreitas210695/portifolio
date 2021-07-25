import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = styled.nav`
    width: 450px;

  ul{
    padding: 10px;
    display: flex;
    justify-content: space-evenly;
  }

  ul li{
    list-style: none;
  }

  ul li a{
    font-family: 'Roboto', sans-serif;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 5px 18px 5px 18px;
    border-radius: 8px;
    color: #FFF;
    text-decoration: none;
  }

  ul li a:hover{
    background-color: #00000030;
  }

  @media (max-width: 680px){
    width: 300px;

    ul{
    padding: 2px;
    display: flex;
    justify-content: flex-end;
  }

  ul li a{
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    padding: 5px 18px 5px 18px;
  }
  }
`;


export default function Menu() {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/Inicial"> 
            Inicio
          </Link>
        </li>
        <li>
         <Link to="/Sobre"> 
            Sobre 
         </Link>
        </li>
        <li>
          <Link to="/GitHub"> 
          Projetos GitHub 
          </Link>
        </li>
      </ul>
    </Nav>
  )
}
