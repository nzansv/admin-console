import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/pageHeader.css'
import alert from'../../assets/icons/alert.svg'

export default function pageHeaderUser() {
    return (
        <div className="pageHeader">
            <label className="mainLink"> <a href="#">Главная</a> / <a href="#">Пользователи Post.kz / </a> <span>Создать пользователя</span></label>
            <h5>Создать пользователя</h5>
           <div className="infoCreatePage">
               <p>Вы можете создать новых пользователей</p>
           </div>
        </div>

    )
}
