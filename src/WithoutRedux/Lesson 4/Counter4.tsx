import {useEffect, useState} from "react";

export const Counter4 = () => {
   const [value, setValue] = useState<number>(0)

   useEffect(() => {
      let valueAsString = localStorage.getItem('counterValue')
      if (valueAsString) {
         let newValue = JSON.parse(valueAsString)
         setValue(newValue)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem('counterValue', JSON.stringify(value))
   }, [value])

   const incHandler = () => {
      setValue(value + 1)
   }

   return (
      <div>
         <h1>Localstorage 4</h1>
         <h3>{value}</h3>
         <button onClick={incHandler}>inc</button>
      </div>
   );
};