import React, { useState } from "react";
import styled from "styled-components";
import folder from "../../../assets/image/folder.png";

const ContainerRepository = styled.main`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const ContextBox = styled.div`
  font-size: 0.7rem;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  width: 220px;
  height: 100px;
  border-radius: 8px;
  background-color: #9196e9;
  text-align: center;

  ul {
    margin-top: 10px;
    list-style: none;
  }

  li{
    img{
      width: 18px;
      height: 14px;
    }
    strong{
      background-color: #dadae9;
      padding: 2px 8px 2px 8px;
      margin-left: 8px;
      border-radius: 5px;
    }

    a{
      margin-left: 4px;
      text-decoration: none;
      color: #183074;
    }

    a:hover{
      text-decoration: underline;
    }

    p{
      margin: 10px 0px 10px 0px;
      color: #555151;
    }
  }
`;


export default function Github() {
  const [repository, setRepository] = useState([]);

  React.useEffect(() => {
    //GET
    fetch("https://api.github.com/users/Allysonfreitas210695/repos")
      .then((Response) => {
        return Response.json();
      })
      .then((result) => {
        setRepository(result);
      });
  }, []);

  return (
    <React.Fragment>
      <ContainerRepository>
        {repository.map((repo) => {
          return (
            <ContextBox key={repo.name}>
              <ul>
                <li>
                <img src={folder} alt="imagem de um livro" />
                  <a rel="noreferrer" href={repo.html_url} target="_blank">{repo.name}</a>
                  <strong>
                    {repo.private !== false ? "Privado" : "Publico"}
                  </strong>
                  <p>{repo.description !== null ? repo.description : 'Sem descrição'}</p>
                    
                  <p>
                  
                    {repo.language !== null
                      ?  repo.language
                      : "Repositório pessoal"}
                  </p>
                </li>
              </ul>
            </ContextBox>
          );
        })}
      </ContainerRepository>
    </React.Fragment>
  );
}
