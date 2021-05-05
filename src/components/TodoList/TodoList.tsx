import React from "react";
import TodoItem from "../TodoItem/TodoItem";
// import Todo from "../models/Todo"
// import "./TodoList.css"
import "../TodoItem/TodoItem.css"
import {
    MDBInput,
    MDBInputGroup,
    MDBRipple
} from "mdb-react-ui-kit";
import ITodoListProps from "./ITodoListProps";
import ITodoListState from "./ITodoListState";

export default class TodoList extends React.Component<ITodoListProps, ITodoListState> {
    constructor(props: ITodoListProps) {
        super(props);

        this.state = {
            newTodoTask: ""
        };
    }

    private addNewTodo() {
        this.props.onAdd(this.state.newTodoTask);
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
                <div style={{margin: "10px 5px 0 5px"}}>
                    <MDBInputGroup className="flex-nowrap">
                        <MDBInput label="Новая задача"
                                  type="text"
                                  wrapperStyle={{width: "calc(100% - 112px)"}}
                                  value={this.state.newTodoTask}
                                  onChange={this.onNewTodoTaskChange.bind(this)}/>
                        <MDBRipple rippleColor="light"
                                   color="success"
                                   onClick={this.addNewTodo.bind(this)}>
                            Добавить
                        </MDBRipple>
                    </MDBInputGroup>
                </div>
                <div>
                    {
                        this.props.todos.map(todo => (
                                <TodoItem key={todo.id} todo={todo} onToggle={this.props.onToggle} onDelete={this.props.onDelete}/>
                            )
                        )
                    }
                </div>
            </ul>
        );
    }
}