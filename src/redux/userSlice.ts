import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    company: '',
    job: '',
    description: '',
    date: '',
    image: ''
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // _가 들어가는 이유는 이 메소드에서는 사용하지 않기 때문
        setUser: (_state, action) => {
            return action.payload;
        },
    },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
