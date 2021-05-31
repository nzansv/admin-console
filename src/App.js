import Login from './pages/auth/Login'
import Component from "./components/Component";
import UserTable from "./pages/tables/userTable";
import CreateUser from "./pages/userCreate/CreateUser";

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <main>
        <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} exact />
          <Route path="/userTable" component={UserTable} />
            <Route path="/userCreate" component={CreateUser} />
        </Switch>
        </BrowserRouter>
      </main>
  )
}


export default App;
