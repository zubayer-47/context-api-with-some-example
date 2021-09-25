import React, { useContext } from "react";
import { Context } from "../Context/Context";

export default function Provider() {
   const { state, dispatch } = useContext(Context);

   const handleChange = e => {
      dispatch({
         type: 'set',
         value: e.target.value
      })
   }

   return (
      <Context.Provider value={{ state, dispatch }}>
         <form onSubmit={e => e.preventDefault()}>
         <input type="text" name="name" value={state.name} onChange={handleChange} />
         <input type="submit" value="Submit" />
         </form>
      </Context.Provider>
   )
}
