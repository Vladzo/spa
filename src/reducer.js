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
            return {
                // ...state,
                // state[0] = state.find(val => val.id === action.payload.id).completed ? false : true,
                // const someData = state.find(val => val.id === action.payload.id)
                // someData
                //     ? someData.completed = true
                //     : someData.completed = false
                // return [
                //     ...state,
                //     someData
                // ]

            }
        default:
            return state;
    }
}
export default reducer;