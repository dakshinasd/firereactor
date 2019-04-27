export const createProject = (project) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        dispatch( {type:"LOADING_START"} );
        
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection('projects').add({
            
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {

            dispatch( {type:"LOADING_STOP"} );
            dispatch({type:"ADD_PROJECT", payload: project});
        }).catch((err) => {

            dispatch({type:"CREATE_PROJECT_ERROR", payload:err})
        })
    }
}