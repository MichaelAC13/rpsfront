import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from "./pages/login/Login";
import {Cadastro} from "./pages/login/Cadastro";
import {Recupera} from "./pages/login/Recupera";
// import {ContextLogin} from "./pages/context/context"
// import React, { useContext, useState } from "react";
import {Home} from './pages/rps/Home';

import './App.css';

const TOKEN_KEY = "@Sistem-Token";
// const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
const getToken = () => localStorage.getItem(TOKEN_KEY);




function App() {
  
        
  if (getToken() == '' ||  getToken() == undefined) {
    return (
      <div className="App-header">
        <Router >
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastros" element={<Cadastro/>}/>
            <Route path="/recuperar" element={<Recupera/>}/>
            <Route path="/servicos" element={<Login/>}/>
          </Routes>
        </Router>
      </div>
    );
  } else{
    // const headertoken = {"a":'aa',}
    // fetch('http://127.0.0.1:5001/api/v1/authenticate',{ method: 'GET', headers: headertoken})
    //     .then( async (reponse) => {
    //         const Token = await reponse.json();
    //         if (Token.token != "Usuário Logado") {
    //             console.log(Token)
    //         }
    //     });
    return (
      <div className="App-header">
        <Router >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cadastros" element={<Cadastro/>}/>
            <Route path="/recuperar" element={<Recupera/>}/>
            <Route path="/servicos" element={<Home/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
  
};

export default App;


