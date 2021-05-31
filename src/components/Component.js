import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavSidebar from "./sidebar/NavSidebar";
import Header from "./header/Header";
import PageWrapper from "./wrapper/PageWrapper";
import './style/component.css'

function Component() {
    return (
        <>
            <div className="fixed-top">
        <Header/>
                <NavSidebar/>
            </div>
                <div className="page-wrapper">
                <PageWrapper/>
                </div>
        </>
    )
}
export default Component;
