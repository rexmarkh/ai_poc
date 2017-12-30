import { Question } from "./question";

export class Content {

    private article:string;
    private questionType:string;
    private questions:Array<Question>;


    get getArticle() : string {
        // console.log("Get Article : ", this.article);
        return this.article;
    }
    set setArticle(value : string) {
        // console.log("Set Article : ", value);
        this.article = value;
    }
    get getQuestionType() : string {
        // console.log("Get QuestionType : ", this.questionType);
        return this.questionType;
    }
    set setQuestionType(value : string) {
        // console.log("Set QuestionType : ", value);
        this.questionType = value;
    } 
    get getQuestions() : Array<Question> {
        // console.log("Get Questions : ", this.questions);
        return this.questions;
    }
    set setQuestions(value : Array<Question>) {
        // console.log("Set Questions : ", value);
        this.questions = value;
    }  
}
