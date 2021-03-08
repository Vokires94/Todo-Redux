export const addToDo = content => ({
    type: "ADD_TODO",
    payload: {
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        text: content
    }
});

export const toggleToDo = hash => ({
    type: "TOGGLE_TODO",
    payload: hash
});

export const setFilter = filter => ({
    type: "SET_FILTER",
    payload: filter
});

export const addLocal = list => ({
    type: "ADD_LOCAL",
    payload: list
});

export const cleanToDo = () => ({
    type: "CLEAN_NOTES"
});