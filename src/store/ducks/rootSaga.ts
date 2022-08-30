import {all, AllEffect, ForkEffect, takeLatest} from 'redux-saga/effects'

import { RepositoriesTypes } from './repositories/types'
import { load } from './repositories/sagas'

export default function* rootSaga():Generator<AllEffect<ForkEffect<never>>>{
    return yield all([takeLatest(RepositoriesTypes.LOAD_REQUEST,load)]);
}