import axios from "axios"

export function getToDo() {
    return async function (dispatch) {
        dispatch(startFeathing())
        const {data} = await axios("https://6538b5eea543859d1bb1c385.mockapi.io/v1/todos")

        dispatch(successGetToDo(data))
    }
}

function startFeathing() {
    return{
        type : "START_FEATHING"
    }
}

function successGetToDo(data) {
    return{
        type: "SUCCESS_GET_DATA",
        payload: data
    }
}

export const addToDo = (newToDo) => async (dispatch) => {
    dispatch(startFeathing())

    await axios.post("https://6538b5eea543859d1bb1c385.mockapi.io/v1/todos", newToDo)

    dispatch(getToDo())
}

