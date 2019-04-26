export const createProject = (project) => {

    return (dispatch, getState, {getFirebase, getFirestore}) => {

        dispatch( {type:"LOADING_START"} );
        
        const firestore = getFirestore();

        firestore.collection('projects').add({
            
            ...project,
            authorFirstName: 'Dakshina',
            authorLastName: 'Wijesuriya',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {

            dispatch( {type:"LOADING_STOP"} );
            dispatch({type:"ADD_PROJECT", payload: project});
        }).catch((err) => {

            dispatch({type:"CREATE_PROJECT_ERROR", payload:err})
        })
    }
}