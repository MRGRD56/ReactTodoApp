import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "../TodoItem/TodoItem.css"
import ITodoListProps from "./ITodoListProps";
import ITodoListState from "./ITodoListState";
import AppContext from "../../context/AppContext/AppContext";
import InputForm from "../InputForm/InputForm";

export default class TodoList extends React.Component<ITodoListProps, ITodoListState> {
    constructor(props: ITodoListProps) {
        super(props);

        this.state = {
            newTodoTask: ""
        };
    }

    static contextType = AppContext;
    
    context!: React.ContextType<typeof AppContext>;

    private addNewTodo(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.context?.addTodo(this.state.newTodoTask);
        this.setState({
            newTodoTask: ""
        });
    }

    private onNewTodoTaskChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            newTodoTask: event.currentTarget.value
        });
    }

    render() {
        return (
            <ul style={{margin: "5", padding: "0"}} className="d-flex flex-column">
                <InputForm inputLabel="Новая задача" buttonText="Добавить" onSubmit={(task: string) => this.context?.addTodo(task)}/>
                {
                    this.props.todos.length > 0
                    ? (
                        <div>
                            {
                                this.props.todos
                                    .sort((a, b) => b.id - a.id)
                                    .sort((a, b) => +a.isDone - +b.isDone)
                                    .map(todo => (
                                    <TodoItem key={todo.id} todo={todo}/>
                                    )
                                )
                            }
                        </div>
                    )
                    : (
                        <div className="m-2 text-muted">
                            Список дел пуст.
                        </div>
                    )
                }
            </ul>
        );
    }
}