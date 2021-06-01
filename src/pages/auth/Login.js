import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/login.css';
import logoLogin from '../../assets/icons/icons-hover/logoLogin.svg'
import { Link } from 'react-router-dom';
function Login() {
    return (
        <body className="text-center">
        <main className="form-signin">
            <form>
                <h1 className=""><img src={logoLogin} alt={"logo"}/> Post Admin</h1>
                <p>Войдите в свой аккаунт</p>
                <hr/>
                <div className="input-login">
                    <input className="form-control" id="user" type="text" placeholder="Логин"/></div>

                <div className="input-login ">
                    <input className="form-control" id="password" type="password" placeholder="Пароль"/></div>
                <a href="/userTable"><button className="w-100 btn btn-lg btn-primary" type="button" value="register"><Link id="login-button" to="/userTable">Войти</Link></button></a>
            </form>
        </main>
        </body>
    );
}

export default Login;
