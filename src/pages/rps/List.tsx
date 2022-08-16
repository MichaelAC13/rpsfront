import "./List.css";
import { SetStateAction, useState, useEffect } from "react";


export const  List = ({sendinfo}:any) =>  {
  
  const [line, setLine] = useState([]);
  const [base, setBase] = useState([]);
  const [basepost, setPostbase] = useState([]);
  const [infos, setInfos] = useState([]);
  
  useEffect(() => {
    getBase()
  },[]);

  // const saveLine = ({target}: any) => {
  //   target.preventDefault();
  //   setLine(target.value);
  //   console.log(target.value);
  // };


  if (sendinfo != undefined) {
  var info = sendinfo
  console.log('info')} else { 
    var info:any = {'Empresa':'',
    'CNPJ':'',
    'Conta Bancaria':'',
    'CContabil':'',
    'Data':'/'}  
    console.log('123')}
  
  
  const getBase = () =>{
    // evt.preventDefault();
    const token = {token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2MmQyZGQ1ZTM2YWFjOTc0N2NkMWI1YTIiLCJuYW1lIjoiTWljaGFlbCIsImVtYWlsIjoibWljaGFlbEBnbWFpbC5jb20iLCJsb2dpbiI6Ik1pY2hhZWwxIiwicGFzc3dvcmQiOiJyZWdpc3RlcmVkIiwidG9rZW4iOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKZmFXUWlPaUkyTW1ReVpHUTFaVE0yWVdGak9UYzBOMk5rTVdJMVlUSWlMQ0p1WVcxbElqb2lUV2xqYUdGbGJDSXNJbVZ0WVdsc0lqb2liV2xqYUdGbGJFQm5iV0ZwYkM1amIyMGlMQ0pzYjJkcGJpSTZJazFwWTJoaFpXd3hJaXdpY0dGemMzZHZjbVFpT2lKeVpXZHBjM1JsY21Wa0lpd2lkRzlyWlc0aU9pSXhNak0wSW4wLktRNXFHUGhORjg4bGU4akVGR0h1dG9XZ3lzMDM0V21adnFUMVd4eW1SN3cifQ.0HrbOQgdPL7KeigBIXka8sYrB5adYgJfKAl7YA0SXMg'}
    fetch('https://apirps.herokuapp.com/api/v1/services',{ method: 'GET',headers: token})
    .then( async (reponse) => {
      const workbase = await reponse.json();
      console.log(workbase)
      setBase(workbase['user'])
      setPostbase(workbase['user'])
    });
  }
  
  const handleChange = ({target}:any) =>{
    if(!target.value) {
      setPostbase(base);
      return;
    }
    console.log(target.value)

    const filter = base?.filter(({Tag}:any) => Tag.toUpperCase().includes(target.value.toUpperCase()));
    setPostbase(filter)
  };

  const saveLine = ({target}:any) =>{
    var jsonline = [];
    jsonline.push(target.id, target.value, target.className);
    fetch('http://fiscal29/base',{ method: 'POST',body: JSON.stringify(jsonline)})
    .then( async (reponse) => {
      const workbase = await reponse.json();
      console.log(workbase)
      setBase(workbase)
      setPostbase(workbase)
    });
  };

  const addLine = ({target}:any) =>{
    target.preventDefault();
    var jsonline = [];
    jsonline.push(target.id, target.value, target.className);
    fetch('https://apirps.herokuapp.com/api/v1/services',{ method: 'GET',body: JSON.stringify(jsonline)})
    .then( async (reponse) => {
      const workbase = await reponse.json();
      console.log(workbase)
      setBase(workbase)
      setPostbase(workbase)
    });
  };
 
  return (
    <div className="list">
        <div >
          <div className="bases" >{basepost.map((extr:any, index: number) => {
            return(
              <table>
                <tr key = {"item" + index}>
                  <td>
                    <input id ={extr.id} contentEditable="true" className="item" placeholder={extr.CNPJ} onChange={saveLine}></input>
                  </td> 
                </tr>
              </table>
              )
            })}
          </div>
        </div>
      </div>
  );
}

