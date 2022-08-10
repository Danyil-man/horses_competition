import store from "../store"
import { setHorses, setStartedRace, setWinnerHorse } from "./horsesSlice"

describe("Race redux state tests", () => {
    it('Correct initial state', () => {
        const state = store.getState()
        expect(state.horses).toEqual([])
        expect(state.raceStarted).toBe(false)
        expect(state.winner).toBe(-1)
    })

    it("Should change state on action dispatch", () => {
        store.dispatch(setHorses([{name: "T1", distance: 1000}]))
        store.dispatch(setWinnerHorse(0))
        store.dispatch(setStartedRace(true))
        expect(store.getState().horses).toEqual([{ name: "T1", distance: 1000 }])
        expect(store.getState().winner).toBe(0)
        expect(store.getState().raceStarted).toBe(true)
    })
})