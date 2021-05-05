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

export default class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {
    constructor(props: ITodoItemProps) {
        super(props);
    }

    render() {
        return (
            <li className="todo-item" key={this.props.todo.id}>
                <MDBCard className="square border border-primary rounded-3">
                    <MDBCardBody className="todo-item-body">
                        <MDBCheckbox checked={this.props.todo.isDone}
                                     label={this.props.todo.task}
                                     className="todo-checkbox"
                                     onChange={() => this.props.onToggle(this.props.todo.id)}/>
                        <MDBRipple color="danger" outline rippleColor="dark" onClick={() => this.props.onDelete(this.props.todo.id)}>Удалить</MDBRipple>
                    </MDBCardBody>
                </MDBCard>
            </li>
        )
    }
}