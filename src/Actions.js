let nextTodoId = 0;

export const addToDo = content => ({
    type: "ADD_TODO",
    payload: {
        id: ++nextTodoId,
        text: content
    }
});

export const toggleToDo = id => ({
    type: "TOGGLE_TODO",
    payload: id
});

export const setFilter = filter => ({
    type: "SET_FILTER",
    payload: filter
});