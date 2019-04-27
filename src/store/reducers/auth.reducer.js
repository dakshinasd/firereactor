const initState = {
    authError: null,
    isLoading: false,
}

const authReducer = (state = initState, {type, payload}) => {

    switch(type){

        case("LOADING"):
            return {
                ...state,
                isLoading: true
            }
        
        case("LOADING_FINISHED"):
            return {
                ...state,
                isLoading: false
            }
        
        case("LOGIN_ERROR"):
            console.log("Login Error")
            return {
                ...state,
                authError: payload
            }

        case("LOGIN_SUCCESS"):
            console.log("Success")
            return {
                ...state,
                authError: null
            }

        case("SIGNOUT_SUCCESS"):
            return state;

        case("SIGNUP_SUCCESS"):
            return {
                ...state,
                authError: null
            };

        case("SIGNUP_ERROR"):
            return {
                ...state,
                authError: payload
            }
        
        default:
            return state;
    }

}

export default authReducer;