const initialState = {
   value: 0
}

type initialStateType = typeof initialState

export const counterReducer = (state: initialStateType = initialState, action: IncValuesAC): initialStateType => {
   switch (action.type) {
      case "INC-VALUE":
         return {
            ...state,
            value: state.value + 1
         }
      case "SET-VALUE-FROM-LOCAL-STORAGE":
         return {
            ...state, value: action.value
         }
      default:
         return state
   }
}

export type IncValuesAC = ReturnType<typeof incValueAC> |
   ReturnType<typeof setValuesFromLocalStorageAC>

export const incValueAC = () => {
   return {
      type: 'INC-VALUE',
   } as const
}

export const setValuesFromLocalStorageAC = (value: number) => {
   return {
      type: 'SET-VALUE-FROM-LOCAL-STORAGE',
      value
   } as const
}
