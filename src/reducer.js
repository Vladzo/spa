const initialState = [];
let counter = 1;
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-ITEM":
            return [
                ...state,
                {id: counter++, text: action.payload.text, completed: action.payload.completed},
            ]
        case "DELETE-ITEM":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "CHANGE-COMPETED":
            return [
                ...state,
                state[0] = state.find(val => val.id === action.payload.id).completed ? false : true,
            ]
        case "INCOMPLETE":
            return {
                ...state,
                counter: state.counter - 100
            }
        default:
            return state;
    }
}
export default reducer;