export default class Todo{
    priority: number;
    text: string;
    dt:number;
    dl: string
    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    constructor(priority:number, text:string, dl:string) {
        this.priority = priority;
        this.text = text;
        this.dt = Date.now();
        this.dl = dl;
    }
}

