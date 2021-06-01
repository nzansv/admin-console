import Login from './pages/auth/Login'
import Component from "./components/Component";
import UserTable from "./pages/userTables/userTable";
import CreateUser from "./pages/userCreate/CreateUser";
import ReportTable from "./pages/report/reportTable";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ServiceTable from "./pages/service/serviceTable";
import MonitoringApplication from "./pages/monitoring/monitoringApp";

function App() {
  return (
      <main>
        <BrowserRouter>
        <Switch>
          <Route path={'/login'} component={Login} exact />
          <Route path="/userTable" component={UserTable} />
          <Route path="/userCreate" component={CreateUser} />
            <Route path="/serviceTable" component={ServiceTable} />
            <Route path="/reportTable" component={ReportTable} />
            <Route path="/monitoring" component={MonitoringApplication} />
            <Route path="/" component={UserTable} />
        </Switch>
        </BrowserRouter>
      </main>
  )
}


export default App;
