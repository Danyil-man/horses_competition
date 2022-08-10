import store from "../store"
import { setHorses, setStartedRace, setWinnerHorse } from "./horsesSlice"

describe("test horsesSlice", () => {
    it('Correct initial state', () => {
        const state = store.getState()
        expect(state.horses).toEqual([])
        expect(state.winner).toBe(-1)
        expect(state.raceStarted).toBe(false)
    })

    it("test how data change in state", () => {
        store.dispatch(setHorses([{name: "Horse1", distance: 1000}]))
        store.dispatch(setStartedRace(true))
        store.dispatch(setWinnerHorse(0))
        expect(store.getState().horses).toEqual([{ name: "Horse1", distance: 1000 }])
        expect(store.getState().winner).toBe(0)
        expect(store.getState().raceStarted).toBe(true)
    })
})