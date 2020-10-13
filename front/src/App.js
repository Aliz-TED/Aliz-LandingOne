import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import './style/App.scss';
import { TimelineMax } from 'gsap';
import logo from './images/Typo.png';

export default function App() {
  const [load, setLoad] = useState(false)

  useEffect(() => {
    if (load === false) {
      setLoad(true)
      const tl = new TimelineMax();
      tl.to('.shine div', { filter: 'blur(0)', transitionDuration: 0.5});
      tl.set('.loader', { display: 'none' }, 2.5);
      tl.set('.App', { display: 'block' }, 2.5);
    }
  }, [load])

  return (

    <Router>
      <div className="shine">
        <div className="loader row justify-content-center">
          <img src={logo} alt="logo Aliz" />
        </div>
      </div>

      <div className="App" >
        <Header />

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}