import React, {useState} from 'react';
import './App.css';

function App() {
   const [value, setValue] = useState<number>(0)

   const incHandler = () => {
      setValue(value + 1)
   }

   const setToLocalStorageHandler = () => {
      localStorage.setItem('counterValue', JSON.stringify(value))
      localStorage.setItem('removeValue', JSON.stringify(value + 1))
   }

   const getFromLocalStorageHandler = () => {
      let valueAsString = localStorage.getItem('counterValue')
      if (valueAsString) {
         let newValue = JSON.parse(valueAsString)
         setValue(newValue)
      }
   }

   const clearLocalStorageHandler = () => {
      localStorage.clear()
      setValue(0)
   }

   const removeItemFromLocalStorageHandler = () => {
      localStorage.removeItem('removeValue')
   }

   return (
      <div className="App">

         <h1>Localstorage</h1>
         <h3>{value}</h3>
         <button onClick={incHandler}>inc</button>
         <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
         <button onClick={getFromLocalStorageHandler}>getFromLocalStorage</button>
         <button onClick={clearLocalStorageHandler}>clearLocalStorage</button>
         <button onClick={removeItemFromLocalStorageHandler}>removeItemFromLocalStorage</button>
      </div>
   );
}

export default App;
