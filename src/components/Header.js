import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/header.css';
import logo from '../assets/icons/icons-hover/logo.svg'
import adminLogo from '../assets/icons/icons-hover/adminLogo.svg'

export default function Header() {
    return (
    <nav className="navbar" id="header">
            <div className="container-fluid">
                <div className="logo">
               <a className="navbar-brand" href="#"> <img src={logo} alt={"logo"}/><span>Post Admin</span></a>
                </div>
                <div className="admin">
                <a className="navbar-brand" href="#"> <img src={adminLogo} alt={"logo"}/><span>Admin</span></a>
                </div>
            </div>

        </nav>
    );
}
