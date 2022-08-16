import "./Itemdetail.css";


export const  Itemdetail = () =>  {
    return ( 
        <div className="details">
          <div className="display-1">
            <div className="logo"></div>
            <div className="box-1">
              <div className="linedetails-4">
                <div className="linedetails">Número da RPS:</div>
                <div className="linedetails-3">123</div>
              </div>
              <div className="linedetails-4">
                <div className="linedetails">Data e Hora de emissão:</div>
                <div className="linedetails-3">10/08/2022</div>
              </div>
              <div className="linedetails">Código de verificação:</div>
              <div className="linedetails-3">SSF512</div>
            </div>
          </div>
          <div className="linedetails-2">TOMADOR DE SERVIÇOS</div>
          <div className="box-2">
            <div className="display-1">
              <div className="linedetails det">CNPJ/CPF:</div>
              <div>Cliente Teste </div>
            </div>
            <div className="display-1">
              <div className="linedetails det">Nome/Razão Social:</div>
              <div>Empresa teste LTDA</div>
            </div>
            <div className="display-1">
              <div className="linedetails det">Endereço:</div>
              <div>Rua Fernando de souza, 415</div>
            </div>
          </div>
          <div className="linedetails-2">SERVIÇO</div>
          <div className="box-2 box-3">
          <div className="display-1">
          <div className="linedetails det">Tipo do Serviço:</div>
          <div className="linedetails-3">Serviço de Manutenção de Máquinas</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">Valor do Serviço:</div>
          <div className="linedetails-3">2.000,00</div>
          </div>
          <div className="display-1">
            <div className="linedetails det">Deducões:</div>
            <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">PIS:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">COFINS:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">INSS:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">IRRF:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">CSLL:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">ISS:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">ISS Retido:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">Outras Retenções:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">ISS Normal:</div>
          <div className="linedetails-3">0,00</div>
          </div>
          <div className="display-1">
          <div className="linedetails det">Valor Total da Nota:</div>
          <div className="linedetails-3">2.000,00</div>
          </div>
          </div>
        </div>
    );
  }