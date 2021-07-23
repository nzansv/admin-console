import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import logoLogin from '../../assets/icons/icons-hover/logoLogin.svg'
import {Link} from 'react-router-dom';
import axios from "axios";


function Login() {
    let login = React.createRef();
    let password = React.createRef();
    let body;

    function onchange() {
        body = {
            'login': login.current.value,
            'password': password.current.value
        }
        console.log("body >> ", body);
    }

    const log = async (e) => {
        try {
            const res = await axios.post('/auth/web/auth', body);
            console.log("dd>>>", res.status)
            if (res.status>=200 && res.status<=299) {
                window.location.href = '/userTable'
            } else {
                alert("Password is not correct")
            }
        } catch (err) {
            console.log("eeee")
            console.log("dd>>>", err.status)
        }
    }

    return (
        <body className="text-center">
        <main className="form-signin">
            <form>
                <h1 className=""><img src={logoLogin} alt={"logo"}/> Post Admin</h1>
                <p>Войдите в свой аккаунт</p>
                <hr/>
                <div className="input-login">
                    <input ref={login} id="user" onChange={onchange} type="text" placeholder="Логин"/></div>

                <div className="input-login ">
                    <input ref={password} id="password" onChange={onchange} type="password" placeholder="Пароль"/></div>

                <button onClick={log} className="w-100 btn btn-lg btn-primary" type="button" value="register">
                    Войти
                </button>

            </form>
        </main>
        </body>
    );
}

export default Login;
