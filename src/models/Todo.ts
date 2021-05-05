export default class Todo {
    constructor(task: string, isDone: boolean = false) {
        this.id = ++Todo._lastId;
        this.task = task;
        this.isDone = isDone;
    }

    id: number;
    task: string;
    isDone: boolean;

    private static _lastId = 0;
}