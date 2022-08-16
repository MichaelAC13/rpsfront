import "./Login.css";
import { useFormik } from 'formik';
import { useState, useEffect, createContext, useContext} from "react";
// import {ContextLogin} from "../context/context"

export const  Login  = () =>  {
    const TOKEN_KEY = "@Sistem-Token";
    const [message, setMessage] = useState([]);
    const login  = async (token:any) => await localStorage.setItem(TOKEN_KEY, token);
    
    const logout = () => {
        localStorage.removeItem(TOKEN_KEY);
    };

    const formik = useFormik({
        initialValues: {
          password: '',
          email: '',
        },

        onSubmit: values => {
        fetch('http://127.0.0.1:5001/api/v1/authenticate',{ method: 'POST',body: JSON.stringify(values)})
        .then( async (reponse) => {
            const extrjson = await reponse.json();
            setMessage(extrjson.message)
            if (extrjson.message == "Usuário Logado") {
                login(JSON.stringify(extrjson.token))  
            }
        });
        },
      });

    
    return (
        <div className="login">
        <div className="display-l">
            <div className="box-l"></div>
            <div className="box-l1">  
                <div className="box-l2">
                    <div className="box-l3">
                    <div className="message">{message}</div>
                    <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="email" >E-mail</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Escreva seu e-mail"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <label htmlFor="password">Senha</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                placeholder="Escreva sua senha"
                            />
                            <div className="middle" >
                                <button id="but" className="btn btn1" type="submit">Logar</button>
                            </div>
                        </form>
                        <a className='linel' href="/cadastros">Cadastre-se.</a>
                        <a className='linel' href="/recuperar">Recuperar senha.</a>
                    </div>    
                </div>
            </div>
        </div>
        </div>
    );
  }
