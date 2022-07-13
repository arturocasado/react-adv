import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { RegisterPage } from '../03-forms/pages/RegisterPage';

import logo from '../logo.svg';
import { FormikBasicPage, FormikYupPage, FormikComponents,FormikAbstractaction, RegisterFormikPage } from '../03-forms/pages';
import { DynamicForm } from '../03-forms/pages/DynamicForm';

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
          <li>
              <NavLink to="/register" activeClassName="nav-active" exact>Registro</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstractaction" activeClassName="nav-active" exact>Formik Abstractaction</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" activeClassName="nav-active" exact>Formik register</NavLink>
            </li>
            <li>
              <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="nav-active" exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/dinamyc-form" activeClassName="nav-active" exact>Dynamic Form</NavLink>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage/>
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage/>
          </Route>
          <Route path="/formik-components">
            <FormikComponents/>
          </Route>
          <Route path="/formik-abstractaction">
            <FormikAbstractaction/>
          </Route>
          <Route path="/formik-register">
            <RegisterFormikPage/>
          </Route>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/dinamyc-form">
            <DynamicForm />
          </Route>
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}