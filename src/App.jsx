import React from 'react';
import style from './App.module.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter1 from "./Components/Counter1/Counter1";
import Counter2 from "./Components/Counter2/Counter2";

const App = () => {
  return (
    <div className={style.App}>
      <p className={style.installText}>Select counter version</p>
      <Navbar/>
      <Route path='/counter1' render={() => <Counter1/>}/>
      <Route path='/counter2' render={() => <Counter2/>}/>
    </div>
  );
}

export default App;
