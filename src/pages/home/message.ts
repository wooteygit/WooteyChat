export class Message{
    public id:number;
    public name:string;
    public who:string;
    public img:string;
    public time:string;

    constructor(id:number,name:string,who:string,img:string,time:string){
        this.id = id;
        this.name = name;
        this.who = who;
        this.img = img;
        this.time = time;
    }
}