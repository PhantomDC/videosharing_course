import user from '../constants/actionsConst'
interface LoginChange {
    login: string;
    password: string;
}
interface RegChange extends LoginChange{
    name: string;
}
export const loginSuccess = (payload: LoginChange) => ({type: user.LOGIN_SUCCESS, payload });
export const regSuccess = (payload: RegChange) => ({type: user.REGISTER_SUCCESS, payload });

export interface ActionUserTypeBase extends RegChange {
    type: string;
}