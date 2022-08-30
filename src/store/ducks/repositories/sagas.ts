import { call, put} from 'redux-saga/effects'
import api from '../../../services/api'

import { loadSuccess,loadFailure } from './actions';

interface ResponseGenerator{
    config?:any,
    data?:any,
    headers?:any,
    request?:any,
    status?:number,
    statusText?:string
}

// essa função tem um generator para carregar as informações
export function* load(){
try {
    const response:ResponseGenerator = yield call(api.get,'users/diego3g/repos');
    yield put(loadSuccess(response.data))
} catch (error) {
    yield put(loadFailure())
}
}