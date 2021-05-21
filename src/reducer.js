const initialState = [];
let counter = 1;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            return [
                ...state,
                {id: counter++, text: action.payload.text, completed: action.payload.completed},
            ]
        case "CHANGE-COMPETED":
            const someData = state.find(val => val.id === action.payload.id)
            someData.completed
                ? someData.completed = false
                : someData.completed = true

                return [
                    ...state
                ]
        case "DELETE-TODO-ITEM":
            const state2 = state.filter(val => val.id !== action.payload.id);
            return [
                ...state2
            ]
        default:
            return state;
    }
}
export default reducer;