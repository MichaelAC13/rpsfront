import "./Home.css";
import {List} from "./List";
import {Menu} from "./Menu";
import {Itemdetail} from "./Itemdetail";

export const  Home = () =>  {
    const logout = () => {
      const TOKEN_KEY = "@Sistem-Token";
      localStorage.removeItem(TOKEN_KEY);
    };
    
    return (
      <div className="display">
        <div className="menu1">
          <Menu></Menu>
        </div >
        <div className="col2">
          <div className="search">
            <div className="text"><input type="text" placeholder="Tomador"/></div>
            <div className="text"><input type="text" placeholder="Data de Emissão"/></div>
            <div className="text"><input type="text" placeholder="Tipo do Serviço"/></div>
            <div className="text"><input type="text" placeholder="Valor"/></div>
          </div>
          <div className="header">
              <div className="titulo">Tomador</div>
              <div className="titulo">Data de Emissão</div>
              <div className="titulo">Tipo do Serviço</div>
              <div className="titulo">Valor</div>
          </div>
          <div className="article">
            <List></List>
          </div>
        </div>
        <div className="col3">
          <Itemdetail></Itemdetail>
        </div>
      </div>
    );
  }