import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from "./PageHeader";
import Search from "../components/Search";
import UserTable from "./userTable";
import PageHeaderUser from "./userEdit/PageHeaderUser";
import CreateUser from "./userEdit/createUser";
import userTable from "./userTable";

export default function PageWrapper() {
    return (
       <div>
           {/*<PageHeaderUser/>*/}
           {/*<CreateUser/>*/}
           <PageHeader/>
           {/*<Search/>*/}
           <UserTable/>
       </div>

    )
}
