import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

const [initialState, setInitialState] = [];

const getUsers = async () => {
    try {
        let res = await axios.get(`/mail-app/api/getAllUsers?page=1&size=10`);
        setInitialState(res.data);
    } catch (err) {
        console.log(err)
    }
}

getUsers();

const userTablePageReducer = (state = initialState, action) => {
    switch (action.type) {

    }
}

export default userTablePageReducer;