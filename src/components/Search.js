import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/search.css';

function Search() {
    return (
        <div className="container-fluid" id="search-box">
            <form>
            <div className="input-group mb-3">
                <input  placeholder="Найти пользователя" type="text" className="form-control"/>
                <div className="input-group-append">
                    <button className="btn">Поиск</button>
                </div>
            </div>
                <div className="function-group mb-3">
                    <button className="btn" id="discharge" >Сбросить</button>
                    <button className="btn" id="apply" >Применить</button>
                    <a href="#">Фильтр по критериям <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.65167 5.14294H8.81461C8.75769 5.14294 8.70412 5.17085 8.67064 5.21661L5.49988 9.58714L2.32912 5.21661C2.29564 5.17085 2.24207 5.14294 2.18515 5.14294H1.34809C1.27555 5.14294 1.23314 5.22553 1.27555 5.28469L5.21082 10.7099C5.35367 10.9063 5.64608 10.9063 5.78783 10.7099L9.72309 5.28469C9.76662 5.22553 9.72421 5.14294 9.65167 5.14294Z" fill="#1890FF"/>
                    </svg>
                    </a>
                </div>
            </form>
        </div>
    )
}
export default Search;
