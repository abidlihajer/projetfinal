import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import { toast } from "react-toastify";

const initialState={
    user: null,
    auth: false,
    errors: [],
    loading: false,
   
};
export const SignupUser = createAsyncThunk(
    "auth/SignupUser",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/auth/signup", data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
);

export const signinUser = createAsyncThunk(
    "auth/signinUser",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post("/auth/signin", data);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
);
export const currentUser = createAsyncThunk(
    "auth/currentUser",
    async (arg, { rejectWithValue }) => {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        try {
            const res = await axios.get("/auth/current", config);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.data.errors);
        }
    }
);
export const deleteUser = createAsyncThunk(
    "auth/deleteUser",
    async (id, { rejectWithValue }) => {
        try {
            const res = await axios.delete(`/auth/deleteUser/${id}`);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.response.errors);
        }
    }
);
export const editUser = createAsyncThunk(
    "auth/editUser",
    async (id, {...data},navigate) => {
        console.log(id,{...data})
        try {
            const res = await axios.put(`/auth/updateUser/${id}`,data)
           
            navigate("/Profile")
        
            console.log(res.data) ;
            
        } catch (error) {
            console.log(error)
        }
    }
);

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.auth = false;
            localStorage.removeItem("token");
        },
    },
    extraReducers(builder){
        builder
            .addCase(SignupUser.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(SignupUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.auth = true;
                state.loading = false;
                localStorage.setItem("token", payload.token);
                toast.success(payload.msg);
            })
            .addCase(SignupUser.rejected, (state, { payload }) => {
                state.errors = payload;
                state.loading = false;
                payload.forEach((error) => toast.error(error.msg));
            })
            .addCase(signinUser.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(signinUser.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.auth = true;
                state.loading = false;
                localStorage.setItem("token", payload.token);
                toast.success(payload.msg);
            })
            .addCase(signinUser.rejected, (state, { payload }) => {
                state.errors = payload;
                state.loading = false;
                payload.forEach((error) => toast.error(error.msg));
            })
            .addCase(currentUser.pending, (state, { payload }) => {
                state.loading = true;
            })
            .addCase(currentUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.auth = true;
                state.loading = false;
            })
            .addCase(currentUser.rejected, (state, { payload }) => {
                state.errors = payload;
                state.loading = false;
            })
            .addCase(deleteUser.pending, (state, { payload }) => {
                state.loading = true;
                localStorage.removeItem("token")
            })
            .addCase(deleteUser.fulfilled, (state, { payload }) => {
                localStorage.removeItem("token")
                state.auth = true;
                state.loading = false;
                state.user=null
                toast.success(payload.msg);
            })
            .addCase(deleteUser.rejected, (state, { payload }) => {
                state.errors = payload;
                state.loading = false;
                payload.forEach((error) => toast.error(error.msg));
            })
            .addCase(editUser.pending, (state, { payload }) => {
                state.loading = true;
                
            })
            .addCase(editUser.fulfilled, (state,{ payload }) => {
            state.auth = true;
            state.loading = false;
            state.user = payload.user
                toast.success(payload.msg);
               console.log(payload.user)
            })
            .addCase(editUser.rejected, (state, { payload }) => {
           
                state.loading = false;
                
            })

    }
})
export const { logout } = authSlice.actions;
export default authSlice.reducer