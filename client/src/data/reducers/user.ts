import user from '../constants/actionsConst'
import {ActionUserTypeBase} from '../actions/user'

const initialState = {
    id: '',
    login: '',
    name: '',
    password: '',
};
interface User {
    type: string,
    payload: ActionUserTypeBase
}
export const userAuth = (state = initialState, action: User): object => {
    switch (action.type) {
        case user.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                login: action.payload.login,
                password: action.payload.password
            })
        case user.REGISTER_SUCCESS:
            return Object.assign({}, state, {
                login: action.payload.login,
                name: action.payload.name,
                password: action.payload.password
            })
        
        default:
            return state;
    }
}