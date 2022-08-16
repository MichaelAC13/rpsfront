import "./Menu.css";
import { useEffect } from "react";

const linkto = ({target}:any) =>{
  console.log("linkto")
};

export const  Menu = () =>  {
    return (
      <div>
        <details open>
          <summary id = "summary">Menu</summary>
          <div className="content">
            <a href="/servicos"><div className="zclear">RPS</div></a>
            <div className="zstrong" onClick={linkto}>
              Prestador
            </div>
            <div className="zclear">
              Tomador
            </div>
            <div className="zstrong">
              Serviços
            </div>
          </div>
        </details>
      </div>
    );
  }