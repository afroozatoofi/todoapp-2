import { createContext } from "react";

const TodoContext = createContext({
    todos: [],
    todo: "",
    handleCreateNewTodo: () => {},
    handleTodoInput: () => {},
    handleCompletedTodo: () => {},
    handleDeleteTodo: () => {}
});

export default TodoContext;
