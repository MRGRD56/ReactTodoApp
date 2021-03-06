import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import TodoList from "../TodoList/TodoList";
import Todo from "../../models/Todo";
import * as React from "react";
import IAppState from "./IAppState";
import IAppProps from "./IAppProps";
import AppContext from "../../context/AppContext/AppContext";
import IAppContextValue from "../../context/AppContext/IAppContextValue";

export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps = {}) {
        super(props);

        const todos = [
            new Todo("Купить хлеб"),
            new Todo("Купить колбасу", true),
            new Todo("Купить сыр"),
        ];

        this.state = { todos };
    }

    render() {
        return (
            <AppContext.Provider value={this._appContextValue}>
                <div className="container">
                    <TodoList todos={this.state.todos}/>
                </div>
            </AppContext.Provider>
        );
    }

    private readonly _appContextValue: IAppContextValue = {
        toggleTodo: this.toggleTodo.bind(this),
        deleteTodo: this.deleteTodo.bind(this),
        addTodo: this.addTodo.bind(this)
    };

    private toggleTodo(todoId: number) {
        // const todo = state.todos.find(x => x.id === todoId);
        // todo.isDone = !todo.isDone;
        // const todos = state.todos;
        // setState({
        //     todos: todos
        // });
        const newState: IAppState = {
            todos: this.state.todos.map(todo => {
                if (todo.id === todoId) {
                    todo.isDone = !todo.isDone;
                }
                return todo;
            })
        };

        this.setState(newState);
    }

    private deleteTodo(todoId: number) {
        const newTodos = this.state.todos.map(x => x);
        const todoIndex = newTodos.findIndex(x => x.id === todoId);
        newTodos.splice(todoIndex, 1);
        const newState: IAppState = {
            todos: newTodos
        }

        this.setState(newState);
    }

    private addTodo(task: string) {
        this.state.todos.push(new Todo(task));
        this.setState({
            todos: this.state.todos
        });
    }
}
