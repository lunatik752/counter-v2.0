import React from 'react';
import style from './App.module.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import Counter2 from "./Components/Counter2/Counter2";
import Counter1Container from "./Components/Counter1/Counter1Container";

const App = () => {
  return (
    <div className={style.App}>
      <p className={style.installText}>Select counter version</p>
      <Navbar/>
      <Route path='/counter1' render={() => <Counter1Container/>}/>
      <Route path='/counter2' render={() => <Counter2/>}/>
    </div>
  );
}

export default App;
