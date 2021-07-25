import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import GitHub from '../../views/Pages/GitHub';
import Inicial from '../../views/Pages/Inicial';
import Sobre from '../../views/Pages/Sobre';
import Error404 from '../Error404';


const ContextStyle = styled.aside`
    width: 100%;
    height: 90vh;
    background: #FFF;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;



export default function Context() {
  return (
    <ContextStyle>
      <Switch>
         <Route exact path="/">
            <Inicial/>
         </Route>
         <Route path="/Inicial">
            <Inicial/>
         </Route>
         <Route path="/Sobre">
            <Sobre/>
         </Route>
         <Route path="/GitHub">
            <GitHub/>
         </Route>
         <Route path="*">
            <Error404 />
         </Route>
     </Switch>
    </ContextStyle>
  )
}
