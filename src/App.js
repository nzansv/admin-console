import Login from './pages/auth/Login'
import Component from "./components/Component";
import UserTable from "./pages/userTables/userTable";
import CreateUser from "./pages/userCreate/CreateUser";
import ReportTable from "./pages/report/reportTable";

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ServiceTable from "./pages/service/serviceTable";
import MonitoringApplication from "./pages/monitoring/monitoringApp";

function App() {
    return (
        <main>
            <BrowserRouter>
                <Switch>
                    <Route path={'/login'} render={() => <Login/>} exact/>
                    <Route path="/userTable" render={() => <UserTable/>}/>
                    <Route path="/userCreate" render={() => <CreateUser/>}/>
                    <Route path="/serviceTable" render={() => <ServiceTable/>}/>
                    <Route path="/reportTable" render={() => <ReportTable/>}/>
                    <Route path="/monitoring" render={() => <MonitoringApplication/>}/>
                    <Route path="/" render={() => <UserTable/>}/>
                </Switch>
            </BrowserRouter>
        </main>
    )
}


export default App;
