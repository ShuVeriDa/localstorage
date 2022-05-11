import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../bll/store";
import {incValueAC} from "../bll/counter-reducer";

export const Counter5 = () => {

   const value = useSelector<AppStateType, number>(state => state.counter.value)
   const dispatch = useDispatch()

   const incHandler = () => {
      dispatch(incValueAC())
   }
   return (
      <div>
         <h1>Localstorage 5</h1>
         <h3>{value}</h3>
         <button onClick={incHandler}>inc</button>
      </div>
   );
};