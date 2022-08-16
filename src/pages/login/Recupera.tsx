import "./Recupera.css";
import { useFormik } from 'formik';
// import { useEffect } from "react";

export const  Recupera = () =>  {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
 

    return (
        <div className="login">
        <div className="display-l">
            <div className="box-c"></div>
            <div className="box-l1">  
                <div className="box-l2">
                    <div className="box-l3">
                    <form onSubmit={formik.handleSubmit}>
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
                                <button id="but" className="btn btn1" type="submit">Recuperar</button>
                            </div>
                        </form>
                        <a className='linel' href="/">Voltar a página de Login.</a>
                    </div>    
                </div>
            </div>
        </div>
        </div>
    );
  }