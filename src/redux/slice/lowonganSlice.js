import { createSlice } from '@reduxjs/toolkit'

const lowonganSlice = createSlice({
    name: 'lowongan',
    initialState: {
        modalShow: false
    },
    reducers: {
        changeModal: (state, action) => {
            state.modalShow = action.payload
        }
    }
})

export const { changeModal } = lowonganSlice.actions
export default lowonganSlice.reducer