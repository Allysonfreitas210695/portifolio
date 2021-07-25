import React from 'react';
import styled from 'styled-components';

const Main = styled.main`
   width: 89%;
   padding: 0px 10px 0px 10px;
   
   display: flex;
   flex-wrap: wrap;
   align-items: center;


   article{
     flex: 1;
     font-size: 30px;
     color: #554e4e;
     font-family: 'Roboto', sans-serif;
   }

    img{ 
      width: 380px;
      height: 380px;
      border-radius: 50%;
    }

    h1{
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 2rem;
      text-align: center;
      margin-bottom: 25px;
    }

    p{
      font-size: 1.3rem;
      line-height:2rem;
    }

    @media(max-width: 680px) {
      flex-direction: column;
      
      article{
        margin-top:20px;
      }

      img{
        width: 180px;
        height: 180px;
      }

      h1{
        font-size: 1.3rem;
        text-align: center;
        margin-bottom: 20px;
      }

      .two-article{
        
        margin-bottom: 35px;
      }

      p{
        font-size: 1.2rem;
        text-align: center;
      }
  }

`;

export default function Inicial() {
  return (
    <>
    <Main>
        <article>
          <img src="https://github.com/Allysonfreitas210695.png" alt="Foto Pessoal" />
        </article>
        <article className="two-article">
          <h1>Minha historia ✍🏻</h1>
          <p>
            Prazer meu nome é <strong>Allyson</strong>, sou do Rio do Norte, de uma cidade chamada de Portalegre e tenho 25 anos. A programação entrou na minha vida através da faculdade, até então eu nunca tinha ouvido falar em programação não, desde então venho buscando mim aprimorar nessa area incrível.
          </p>
        </article>
      </Main>
    </>
  )
}
