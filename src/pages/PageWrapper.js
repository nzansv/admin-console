import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from "./PageHeader";
import Search from "../components/Search";
import UserTable from "./userTable";

export default function PageWrapper() {
    return (
       <div>
           <PageHeader/>
           <Search/>
           <UserTable/>
       </div>

    )
}
