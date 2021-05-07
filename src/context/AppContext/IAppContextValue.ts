export default interface IAppContextValue {
    toggleTodo: (todoId: number) => void,
    deleteTodo: (todoId: number) => void,
    addTodo: (task: string) => void
}