const authActions = {
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    
    login: (data) => {
        return {
            type: authActions.LOGIN,
            isLogin: true,
            accessToken: data.token,
            adminId : data.id,
            adminName : data.name,
            adminType : data.adminType
        };
    },
    logout: () => {
        return {
            type: authActions.LOGOUT,
            isLogin: false,
            accessToken: null,
            adminName : null
        };
    }
}

export default authActions