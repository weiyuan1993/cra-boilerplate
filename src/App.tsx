import React, { useEffect, useCallback  } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from 'src/actions/user';
import { useSelector } from 'src/hooks';

import './App.scss';
// import style from './App.module.scss';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const { email, name } = useSelector(state => state.user)
  const dispatch = useDispatch();
  const stableDispatch = useCallback(dispatch, [])
  useEffect(() => {
    async function mockLogin() {
      await stableDispatch(login());;
    }
    mockLogin();
  },[stableDispatch])
  return (
    <div>
      <h2>Home</h2>
      {
        email && name ? (
          <>
            <span>Email: {email}</span>
            <span>Name: {name}</span>
          </>
        ) : <span>Logining...</span>
      }

    </div>
  );
}

function About() {
  const { email, name } = useSelector(state => state.user)

  return (
    <div>
      <h2>About</h2>
      <span>Email: {email}</span>
      <span>Name: {name}</span>
    </div>
  );
}

function Dashboard() {
  const { email, name } = useSelector(state => state.user)

  return (
    <div>
      <h2>Dashboard</h2>
      <span>Email: {email}</span>
      <span>Name: {name}</span>
    </div>
  );
}
