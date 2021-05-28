import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './createUser.css'

function CreateUser() {
    return (
        <div className="container-fluid" id="create-user-form">
            <div className="saveUser">
                <div className="d-flex">
                    <div className="mr-auto p-2"><h5>Данные о пользователе</h5></div>
                    <div className="p-2"><a href="#">Сохранить</a></div>

                </div>
            </div>
            <div className="createUserForm">
                <form action="">
                    <div className="row">
                        <div className="col">
                                <label htmlFor="exampleFormControlInput1" className="form-label">ИИН</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="col">
                                <label htmlFor="exampleFormControlInput1" className="form-label">ФИО</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="col">

                                <label htmlFor="exampleFormControlInput1" className="form-label">Дата рождения</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                    </div>

                </form>
            </div>
            <div className="createUserForm">
                <form action="">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Номер телефона</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="col">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Электронный адрес</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1"/>
                        </div>
                        <div className="col">

                            <label htmlFor="userRoles" className="form-label">Роль пользователя</label>
                            <select className="form-control" id="userRoles">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default CreateUser;
