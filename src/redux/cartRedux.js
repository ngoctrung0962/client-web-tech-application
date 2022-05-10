import { createSlice } from "@reduxjs/toolkit";




const cartSlice = createSlice({
    name: "cart",
    initialState: {
        listCart: [],
        addItem: '',
        updateItem: '',
        deleteItem: ''
    },
    reducers: {
        getCartitems: (state, data) => {
            state.listCart = data;
        },
        addCartitems: (state, data) => {
            state.addItem = data
        },
        deleteCartitems: (state, data) => {
            state.deleteItem = data
        },
        updateCartitems: (state, data) => {
            state.updateItem = data
        },

    },
});

export const { getCartitems, addCartitems, deleteCartitems, updateCartitems } = cartSlice.actions;
export default cartSlice.reducer;
