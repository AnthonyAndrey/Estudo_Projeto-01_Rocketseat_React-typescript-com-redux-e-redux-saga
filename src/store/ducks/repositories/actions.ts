/**
 * funções que disparam nossos types
 */
import { action } from "typesafe-actions"
import { RepositoriesTypes, Repository } from "./types"

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST)
// quando recebermos a resposta da requisição com os dados dos repositorios mandamos essa resposta para a 
// action que o reducer vai ouvir e atualizar nosso state
// o segundo item do action é o payload que pode ser alterado no reducer
export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE)