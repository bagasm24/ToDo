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

export const editCheckbox = (id, status) => async (dispatch) => {
    try{
        await axios.put(`https://6538b5eea543859d1bb1c385.mockapi.io/v1/todos/${id}`, { status });
        const {data} = await axios("https://6538b5eea543859d1bb1c385.mockapi.io/v1/todos")
        dispatch(successGetToDo(data))
    }catch (error) {
      console.error("Gagal memperbarui status: ", error);
    }   
}

export const deleteToDo = (id) => async (dispatch) => {
    await axios.delete(`https://6538b5eea543859d1bb1c385.mockapi.io/v1/todos/${id}`)
    const {data} = await axios("https://6538b5eea543859d1bb1c385.mockapi.io/v1/todos")
    dispatch(successGetToDo(data))
}