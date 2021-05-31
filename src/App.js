import Login from './pages/auth/Login'
import Component from "./components/Component";
import UserTable from "./pages/tables/userTable";
import CreateUser from "./pages/userCreate/CreateUser";
import ReportTable from "./pages/service/reportTable";

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ServiceTable from "./pages/service/serviceTable";

function App() {
  return (
      <main>
        <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path="/userTable" component={UserTable} />
          <Route path="/userCreate" component={CreateUser} />
            <Route path="/serviceTable" component={ServiceTable} />
            <Route path="/reportTable" component={ReportTable} />
        </Switch>
        </BrowserRouter>
      </main>
  )
}


export default App;
