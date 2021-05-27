import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/userTable.css'
import reload from '../assets/icons/reload.svg'
import add from '../assets/icons/add.svg'

export default function UserTable() {
    return (
        <div className="userTable">
            <div className="upperTableToDo">
                <h5>Результаты поиска</h5>
                <div className="toDoButton">
                <a href="#" className="btn btn-primary"><img src={add} alt=""/> Создать</a>
                <a href="#" className="btn" id="btn-update">Редактировать</a>
                <a href="#" className="btn" id="btn-update">Удалить</a>
                <a href="#" className="btn" id="btn-update">Сбросить пароль</a>
                <a href=""><img src={reload} alt=""/></a>
                </div>
            </div>
        </div>
    );
}


