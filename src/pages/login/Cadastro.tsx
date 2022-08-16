import "./Cadastro.css";
import { useFormik } from 'formik';
import { useState, useEffect } from "react";


export const Cadastro = () => {
  const [message, setMessage] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      email: '',
    },
    onSubmit: values => {
      console.log(values)
      fetch('http://127.0.0.1:5001/api/v1/users',{ method: 'POST',body: JSON.stringify(values, null, 2)})
        .then( async (reponse) => {
            const extrjson = await reponse.json();
            setMessage(extrjson.message)
        });
    },
  });
  
  return (
    <div className="login">
        <div className="display-l">
            <div className="box-c"></div>
            <div className="box-l1">  
                <div className="box-l2">
                    <div className="box-l3">
                        <div className="message">{message}</div>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="name">Nome</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                onChange={formik.handleChange}
                                placeholder="Escreva seu nome completo"
                                value={formik.values.name}
                            />
                            <label htmlFor="password">Senha</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                placeholder="Escreva uma senha"
                            />
                            <label htmlFor="email" >Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="Escreva um e-mail válido"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            <div className="middle" >
                                <button id="but" className="btn btn1" type="submit">Cadastrar</button>
                            </div>
                        </form>
                        <a className='linel' href="/">Voltar a página de Login.</a>
                        <a className='linel' href="/recuperar">Recuperar Senha.</a>
                    </div>    
                </div>
            </div>
        </div>
        </div>
  );
};