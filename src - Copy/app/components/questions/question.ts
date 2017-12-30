export class Question {
    private qid:number;
    private options:Array<string> = [];
    private answer:string;

    constructor () {

    }
    get getQid() : number {
        console.log("Get Qid : ", this.qid);
        return this.qid;
    }
    set setQid(value : number) {
        console.log("Set Qid : ", value);
        this.qid = value;
    } 

    get getOptions() : Array<string> {
        console.log("Get Options : ", this.options);
        return this.options;
    }
    set setOptions(value : Array<string>) {
        console.log("Set Options : ", value);
        this.options = value;
    } 
    get getAnswer() : string {
        console.log("Get Answer : ", this.answer);
        return this.answer;
    }
    set setAnswer(value : string) {
        console.log("Set Answer : ", value);
        this.answer = value;
    }
}
