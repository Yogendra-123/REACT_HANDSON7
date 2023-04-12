import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
name : 'dataSlice',
initialState : [
    {name:'yogi',age:'24',course:'B.E.',batch:'EA15'},
    {name:'virat',age:'23',course:'btech',batch:'EA18'},
    {name:'yogendra',age:'25',course:'B.E.',batch:'EA20'},
    {name:'rohit',age:'29',course:'M.E.',batch:'EA15'},
],
reducers : {
    editData:(state, action)=>{
        console.log(state)
       console.log(action.payload)
        state[action.payload.index] = action.payload.newObj;
        return(state)
    },
    addData:(state, action)=>{
      
      console.log(state)
      console.log(action.payload)
      state.push(action.payload)
      console.log(state)
      return (state)

    }
}
})
export const { editData, addData } = dataSlice.actions
export default dataSlice.reducer;