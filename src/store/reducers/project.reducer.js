const initState = {
    projects: [
        { id: 1, title: "This is so facinating", content: "blah, blah blah" },
        { id: 2, title: "Wow. Suprising!!", content: "blah, blah blah" },
        { id: 3, title: "Normal content", content: "blah, blah blah" }
    ]
}

const projectReducer = (state = initState, {action, payload}) => {

    return state;
}

export default projectReducer;