import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
name : 'dataSlice',
initialState : [
    {name:'yogi',age:'24',course:'B.E.',batch:'17'},
    {name:'virat',age:'23',course:'btech',batch:'18'}
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