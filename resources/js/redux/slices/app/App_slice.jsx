
import { createSlice } from "@reduxjs/toolkit";

const App = createSlice({
    name: "App",
    initialState: {
        main: { getPlans: { plans: null, loading: 0 } }

    },
    reducers: {
        changeGetPlans: (state, actions) => {
            state.main.getPlans = { ...state.main.getPlans, ...actions.payload }
        }

    }
});
export const {changeGetPlans } = App.actions;
export default App.reducer;
