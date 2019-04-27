export const signIn = (credentials) => {

    return (dispatch, getState, {getFirebase}) => {

        dispatch({type:"LOADING"});
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
            ).then( res => {
                
            dispatch({type:"LOADING_FINISHED"});
            dispatch({ type: "LOGIN_SUCCESS"})
        }).catch(err => {
            
            dispatch({type:"LOADING_FINISHED"});
            dispatch({ type:"LOGIN_ERROR", payload: err})
        })
    }

}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) =>{

        const firebase = getFirebase();
        firebase.auth().signOut()
            .then( () => {

                dispatch({type:"SIGNOUT_SUCCESS"})
            })
    }
}

export const signUp = (user) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        const firebase = getFirebase();
        const firestore = getFirestore();

        dispatch({type: "LOADING"});
        
        firebase.auth().createUserWithEmailAndPassword(
            user.email,
            user.password
            ).then((response) => {
                return firestore.collection("users").doc(response.user.uid).set({
                    firstName: user.firstName,
                lastName: user.lastName,
                initials: user.firstName[0] + user.lastName[0]
            })
        }).then(() => {
            
            dispatch({type: "LOADING_FINISHED"});
            dispatch({type:"SIGNUP_SUCCESS"})
        }).catch((err) => {
            
            dispatch({type: "LOADING_FINISHED"});
            dispatch({type: "SIGNUP_ERROR", payload: err})
        })
    }
}