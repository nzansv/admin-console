import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/navSidebar.css';
import cell from '../../assets/icons/cell.svg'
import user from '../../assets/icons/user.svg'
import monitoring from '../../assets/icons/monitoring.svg'
import trash from '../../assets/icons/trash.svg'
import diagram from '../../assets/icons/diagram.svg'
export default function NavSidebar() {
    return (

        <div className="wrapper ol-md-2 d-none d-md-block">
            <div className="sidebar">
                <ul className="align-middle">
                    <li id="user"><a href="#"><img src={user} alt={"user"}/>Пользователи</a></li>
                    <li id="cell"><a href="#"><img src={cell} alt={"cell"}/>Отчетность</a></li>

                    <li id="diagram"><a href="#"><img src={diagram} alt={"diagram"}/>Услуги и Сервисы</a></li>
                    <li id="trash"><a href="#"><img src={trash} alt={"trash"}/>Корзина</a></li>
                </ul>
            </div>
        </div>
    );
}
