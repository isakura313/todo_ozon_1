export default class Todo{
    priority: number;
    text: string;
    dt:string;
    dl: string;
    id:number;
    /*
        priority - важность дела
        text - контент, содержимое
        dt -  дата создания дела
        dl - deadline
     */
    constructor(priority:number, text:string, dl:string) {
        this.priority = priority;
        this.text = text;
        this.dt = (new Date()).toString();
        this.dl = dl;
    }

    SetID(id:number) {
        this.id = id;
    }

}

