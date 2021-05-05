import Todo from "../../models/Todo";

export default interface ITodoItemProps {
    todo: Todo,
    onToggle: Function,
    onDelete: Function
}