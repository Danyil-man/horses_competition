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
        setStartedRace: (state, action) => {
            state.raceStarted = action.payload
        },
        setWinnerHorse: (state, action) => {
            if (state.winner === -1) {
                state.winner = action.payload
            }
        }
    }
});

export const { setHorses, setWinnerHorse, setStartedRace } = horsesSlice.actions

export default horsesSlice.reducer;