import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PageHeader from "./PageHeader";
import Search from "../components/Search";

export default function PageWrapper() {
    return (
       <div>
           <PageHeader/>
           <Search/>
       </div>

    )
}
