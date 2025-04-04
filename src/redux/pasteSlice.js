import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  paste: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes')) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste = action.payload;
      const existingPaste = state.paste.find((item) => item.id === paste.id);
      if (existingPaste) {
        toast.error("Paste already exists")
        return;
      }
      state.paste.push(paste)
      localStorage.setItem('pastes', JSON.stringify(state.paste));
      toast.success("Paste Added Successfully")

    },
    removeFormPaste: (state, action) => {
      const paste = action.payload;
      const index = state.paste.findIndex((item) => item.id === paste.id);
      if (index !== -1) {

        state.paste.solice(index, 1);
        localStorage.setItem('pastes', JSON.stringify(state.paste));
        toast.success("Paste Remove Successfully")
      }
    },
    updateToPaste: (state, action) => {
      const paste = action.payload;
      const index = state.paste.findIndex((item) => item.id === paste.id);
      if (index !== -1) {
        state.paste[index] = paste;
        localStorage.setItem('pastes', JSON.stringify(state.paste));
        toast.success("Paste updated Successfully")
      } else {
        toast.error("Paste not found")
      }
    },
    resetAllPaste: (state, action) => {
      state.paste = [];
      localStorage.removeItem('paste')
    },

  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, removeFormPaste, updateToPaste, resetAllPaste } = pasteSlice.actions

export default pasteSlice.reducer