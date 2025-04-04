import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  paste: localStorage.getItem('paste') 
  ? JSON.parse(localStorage.getItem('paste')) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      
    },
    removeFormPaste: (state, action) => {
      
    },
    updateToPaste: (state, action) => {
      
    },
    resetAllPaste: (state, action) => {
      
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, removeFormPaste, updateToPaste, resetAllPaste } = pasteSlice.actions

export default pasteSlice.reducer