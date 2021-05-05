import React from "react";
import "./TodoItem.css";
import {
    MDBCheckbox,
    MDBCard,
    MDBCardBody,
    MDBRipple
} from "mdb-react-ui-kit";
import ITodoItemProps from "./ITodoItemProps";
import ITodoItemState from "./ITodoItemState";
import AppContext from "../../context/AppContext/AppContext";

export default class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: ITodoItemProps) {
        super(props);
    }
    
    static contextType = AppContext;
    context!: React.ContextType<typeof AppContext>

    render() {
        return (
            <li className="todo-item" key={this.props.todo.id}>
                <MDBCard className="square border border-primary rounded-3">
                    <MDBCardBody className="todo-item-body align-items-center text-break">
                        <MDBCheckbox checked={this.props.todo.isDone}
                                     label={this.props.todo.task}
                                     className="todo-checkbox text-wrap"
                                     onChange={() => this.context?.toggleTodo(this.props.todo.id)}/>
                        <MDBRipple color="danger"
                                   outline
                                   rippleColor="dark"
                                   style={{flex: "none"}}
                                   onClick={() => this.context?.deleteTodo(this.props.todo.id)}>
                            Удалить
                        </MDBRipple>
                    </MDBCardBody>
                </MDBCard>
            </li>
        )
    }
}