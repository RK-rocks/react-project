
import authAction from './actions'

const initState = {
    isLogin: localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') === 'true' : false,
    accessToken: localStorage.getItem('accessToken'),
    adminId: localStorage.getItem('adminId') ? localStorage.getItem('adminId') : 0,
    adminName: localStorage.getItem('adminName') ? localStorage.getItem('adminName') : null,
    adminType: localStorage.getItem('adminType') ? localStorage.getItem('adminType') : 'subadmin',
}


export default function rootReducer(state = initState, action) {

    switch (action.type) {
        case authAction.LOGIN:
            return {
                ...state,
                isLogin: action.isLogin,
                accessToken: action.accessToken,
                adminId: action.adminId,
                adminName: action.adminName,
                adminType: action.adminType,
            }
        case authAction.LOGOUT:
            return {
                ...state,
                isLogin: action.isLogin,
                accessToken: null,
                adminId:0,
                adminName:null,
            }
        default:
            return state
    }
}