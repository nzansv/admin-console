import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/userTable.css'
import {connect} from "react-redux";
import UserTable from "./userTable";

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const UserTableContainer = connect(mapStateToProps, mapDispatchToProps)(UserTable);

export default UserTableContainer;

