import Todo from "../../models/Todo";

export default interface ITodoListProps {
    todos: Todo[],
    onToggle: Function,
    onDelete: Function,
    onAdd: Function
}