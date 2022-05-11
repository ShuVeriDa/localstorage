import React from 'react';
import './App.css';
import {Counter4} from "./WithoutRedux/Lesson 4/Counter4";
import {Counter123} from "./WithoutRedux/Lesson 1-3/Counter123";
import {Counter567} from "./WithRedux/lesson 567/Counter567";


function App() {

   return (
      <div className="App">
         {/*<Counter123 />*/}
         {/*<Counter4 />*/}
         <Counter567 />
      </div>
   );
}

export default App;
