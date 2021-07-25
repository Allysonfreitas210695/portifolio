import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    line-height: 1.7rem;
    text-align: center;
    padding: 10px;
    color: #FFF;
    background: #4f36a8;

    strong{ 
      color: #dfcccc;
      margin-left: 4px;
      margin-right: 5px;
    }

    @media(max-width: 680px) {
      p{
        font-size: 12px;
        line-height: 1.4rem;
      }
    }
`;

export default function Footer() {
  return (
    <FooterStyle>
          <p>Copyright &copy; <strong>Allyson DevJr </strong>2021 </p>
          <p>portfolio for the job market in programming</p>
    </FooterStyle>
  )
}
