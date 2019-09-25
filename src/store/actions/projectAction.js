export const createProject = (project) => {
    return (dispatch,getState, {getFirestore, getFirebase}) => {
        //make async call to database
        const fireStore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        fireStore.collection('project').add({
            ...project,
            authFirstName: profile.firstName,
            authLastName:profile.lastName,
            authId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type:'CREATE_PROJECT',project});
        }).catch((error) => {
                dispatch({type:'CREATE_PROJECT_ERROR',error});
            })
       
    }
}