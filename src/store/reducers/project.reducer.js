const initState = {
    loading: false,
    projects: [
        { id: 1, title: "This is so facinating", content: "blah, blah blah" },
        { id: 2, title: "Wow. Suprising!!", content: "blah, blah blah" },
        { id: 3, title: "Normal content", content: "blah, blah blah" }
    ]
}

const projectReducer = (state = initState, {type, payload}) => {

    switch(type){

        case "LOADING_START":
            return {
                ...state,
                loading: true
            }

        case "LOADING_STOP":
            return {
                ...state,
                loading: false
            }

        case "ADD_PROJECT":
            return state;
            
        case "ADD_PROJECT_ERROR":
            console.log("ERROR", payload);
            return state;

        default:
            return state;
    }
}

export default projectReducer;