import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    horses: [],
    raceStarted: false,
    winner: -1,
}

export const horsesSlice = createSlice({
    name: 'horses',
    initialState,
    reducers: {
        setHorses: (state, action) => {
            state.horses = action.payload
        },
        setWinner: (state, action) => {
            if (state.winner === -1) {
                state.winner = action.payload
            }
        },
        setRaceStarted: (state, action) => {
            state.raceStarted = action.payload
        },
    }
});

export const { setHorses, setWinner, setRaceStarted, setUserChoise } = horsesSlice.actions

export default horsesSlice.reducer;