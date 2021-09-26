import React from 'react';
import styled from 'styled-components';

const SobreStyles = styled.main`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    font-family: 'Roboto', sans-serif;

    h1{
      text-align: center;
      font-size: 1.7rem;
      font-weight: 500;
    }

    h2{
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
    }

   img{
     width: 150px;
     height: 150px;
     border-radius: 50%;
     margin-right: 60px;
   }

   .profile-info{
     display: flex;
     justify-content: center;
     align-items: center;
     margin-top:1.7rem;
     margin-bottom: 1.5rem;
     line-height: 1.5rem;

     @media(max-width: 680px){
       display: flex;
       align-items: center;
       justify-content: center;
       flex-direction: column;

       img{
         width: 120px;
         height: 120px;
         margin-bottom:15px;
       }
     }
   }
   
   .profile-info .container{

     label{
       font-size: 1.2rem;
       font-weight: 700;
       color: #000000;
     }
     span{
       font-size: 1.3rem;
       font-weight: 400;
       color: #00000090;
     }

     @media(max-width: 680px) {
       label{
         font-size: 0.8rem;
       }
       span{
       font-size: 0.8rem;
       font-weight: 400;
       color: #00000090;
     }
     }
   }

   .redes-socias{
     text-align: center;
     line-height: 1.9rem;
     
     h2{
       margin-bottom: 1rem;
     }

     label{
       font-size: 1.2rem;
       font-weight: 700;
       color: #000000;
     }

     a{
       text-decoration: none;
       color: #00000090;
       padding: 10px;
       border-radius: 50%;
     }

     a:hover{
       background-color: #00000030;
     }

     @media(max-width: 680px) {
       h2{
         font-size: 1.2rem;
       }
       label{
       font-size: 0.8rem;
     }
     a{
       font-size: 0.8rem;
     }

     }
   }

   .experience{
     text-align: center;
     margin-top: 1rem;
     display: flex;
     flex-direction: column;
     
     h2{
       margin-top: 1rem;
       margin-bottom: 1rem;
     }

     p{ 
       width: 600px;
       line-height: 1.6rem;
       text-align: center;
       color: #00000090;
       margin: 0 auto;
     }

     @media(max-width: 680px) {
       h2{
         font-size: 1.3rem;
       }

       p{
         font-size: 0.6rem;
         margin-bottom: 1.3rem;
       }
     }
   }

   @media(max-width: 680px) {
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     h1{
       display: none;
     }
   }

`;

export default function Sobre() {
  return (
    <SobreStyles>
      <h1>Informações Pessoais</h1>  
      <div className="profile-info">
      <img src="https://github.com/Allysonfreitas210695.png" alt="Foto Pessoal" />

        <div className="container">
          <label>Nome:</label> <span>Allyson Bruno de Freitas Fernandes</span><br />
          <label>Cidade:</label> <span>Portalegre/RN</span><br />
          <label>Endereço:</label> <span>Sitio Lajes</span><br />
          <label>Telefone:</label> <span>(84) 99813-8643</span><br />
          <label>Email:</label> <span>alison83@gmail.com</span>
        </div>
      </div>

      <div className="redes-socias">
          <h2>Redes Sócias</h2>
          <label>Facebook:</label> <a rel="noopener noreferrer" href="https://www.facebook.com/bryan998138643" target="_blank">Visualizar Perfil</a><br />

          <label>Instagram:</label> <a rel="noopener noreferrer" href="https://www.instagram.com/allyson_fr/"  target="_blank">Visualizar Perfil</a><br />

          <label>LinkedIn:</label> <a rel="noopener noreferrer" href="https://www.linkedin.com/in/allyson-freitas"target="_blank" >Visualizar Perfil</a>
      </div>
      <div className="experience">
        <h2>Experiência Profissional</h2>
        <article>
          <p>
            No momento estou em busca de meu primeiro estagio e com o passar do tempo adquirir experiencia e trabalhar no mercado,
            a area que estou mais gostando é programação Web, focado para estudo de React.js, Next.js, Javascript, Css e Html.
            </p>
        </article>
      </div>
    </SobreStyles>
  )
}
