import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    loading:false,
    data :[],
    error:null
}
export const fetchAdvice = createAsyncThunk("advice/fetchAdvice" , () => {
    return axios.get("https://api.adviceslip.com/advice")
    .then(response => response.data.slip)
    .catch(error => error.message)
})

const AdviceSlice = createSlice({
    name :'advice',
    initialState,
    reducers:{},
    extraReducers : (builder) => {
        builder.addCase(fetchAdvice.pending,(state,action) => {
            state.loading = true;
        })
        builder.addCase(fetchAdvice.fulfilled ,(state,action) => {
            state.loading = false;
            state.data=action.payload;
    
        })
        builder.addCase(fetchAdvice.rejected ,(state,action) => {
            state.loading = false;
            state.error=action.payload;
        })
    }
})
export default AdviceSlice.reducer;
