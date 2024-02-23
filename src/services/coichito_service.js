import { api } from "./api_service";


const getCoichito = async (id) => {

    api.get(`coichitos/${id}`)
    .then( response => {
        
      return response.data
    })
   .catch (error => {
        console.log(error)
   })
}

const getCoichitos = async () => {
    try {
        const response = await api.get("coichitos")
        console.log(response.data) // Verifica los datos aquí
        return response.data
    } catch (error) {
        console.error('Error al obtener coichitos:', error)
        throw error
    }
}

const createCoichito = async () => {
    await api.post("coichitos", {
        id: "2",
        name: "Bulbasaur"
    })
    .then( response => {
        console.log(response)
    })
    .catch ( error => console.log(error))
}



export { getCoichito, getCoichitos, createCoichito };