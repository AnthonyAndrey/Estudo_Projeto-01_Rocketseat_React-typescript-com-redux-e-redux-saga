// configuração do estado de nossa aplicação de uma forma global
import { configureStore } from "@reduxjs/toolkit";
import { Store, applyMiddleware } from 'redux'
import createSagaMiddleware from "redux-saga";
import { RepositoriesState } from "./ducks/repositories/types";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = configureStore({ reducer: rootReducer, middleware: [ sagaMiddleware]})

sagaMiddleware.run(rootSaga)

export default store;