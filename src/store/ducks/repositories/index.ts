/**
 * aqui vão ficar os reducers: manipuladores de estado
 */
import { Reducer } from "redux"
import { RepositoriesState, RepositoriesTypes } from "./types"

const INITIAL_STATE: RepositoriesState = {
    data: [],
    error: false,
    loading: false
}
// variável do tipo Reducer<parametros>
// dentro do paramentro passamos o tipo/formato que o reducer vai manipular os dados
const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RepositoriesTypes.LOAD_REQUEST:
            // se for uma requisição antão vamos copiar todo o estado e adicionar loading: true
            return { ...state, loading: true }
        case RepositoriesTypes.LOAD_SUCCESS:
            // copia todo o estado, atualiza data para action.payload.data
            return { ...state, loading: false, error: false, data: action.payload.data }
        case RepositoriesTypes.LOAD_FAILURE:
            // se der erro copia o state, seta o erro como true e passa nenhum dado
            return { ...state, loading: false, error: true, data: [] }
        default:
            // retorna o state atualizado por qualquer um dos casos
            return state
    }
}

export default reducer