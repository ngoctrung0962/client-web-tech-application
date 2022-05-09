import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getListCartApi} from '../api/cartApi';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        status: 'idle',
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

    extraReducers: builder =>{
        builder
            .addCase(getAllCarts.fulfilled, (state, action) => {
                state.listCart = action.payload
                state.status = 'idle'
            })
            .addCase(getAllCarts.pending, (state, action) => {
                state.status = 'loading'
            })
    }
});

export const getAllCarts = createAsyncThunk('cart/getAllCarts', async () =>{
    const res = await getListCartApi('nam');
    return res;
})

export const { getCartitems, addCartitems, deleteCartitems, updateCartitems } = cartSlice.actions;
export default cartSlice.reducer;
