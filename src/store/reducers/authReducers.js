const initState = {
    authError: null
};

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
                console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN-SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError:null
            }
            case 'SINOUT_SUCCESS':
                console.log('signout success');
                return state;
                case 'SIGNUP_SUCCESS':
                    console.log('signup success')
                    return {
                        ...state,
                        authError:null
                    }
                    case 'SIGNUP_ERROR':
                        console.log('signup error')
                        return {
                            ...state,
                            authError: action.error.message
                        }
            default:
                return state;
    }
};

export default authReducer;