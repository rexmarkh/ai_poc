import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Content } from "../components/questions/content";
import { Question } from "../components/questions/question";


@Injectable()
export class FetchdataService {
  public data: any = [];
  private cont = new Content();
  private baseUrl = "./assets/data/ai.json";

  constructor(private http: Http) {

  }
  ngOnInit() { }
  
  fetchData(){
    return this.http.get(this.baseUrl).map((res: Response) => {
      return res.json();
    });
  }

  setData(){
    return this.fetchData().subscribe(data => {
      this.data = data;
      // console.log(this.data);
    });
  }
  public parseJSONData(){
    
    let ques;
    let optionArray:Array<string>;
    let questionArray:Array<Question> = [];
    let data = this.data;
    for (let i = 0; i < data.questions.length; i++) {
      const element = data.questions[i];
      ques = new Question();
      ques.setQid = element.id;
      ques.setAnswer = element.answer;
      optionArray = [];  
       for (let j = 0; j < data.questions[i].options.length; j++){
         optionArray.push(data.questions[i].options[j]);         
       }
      ques.setOptions = optionArray;
      questionArray.push(ques); 
    }
    this.cont.setQuestions = questionArray;
    this.cont.setArticle = data.article;
    this.cont.setQuestionType = data.questionType;
    return this.cont;
  }

  public ss(){
    // console.log(this.cont.getQuestions);  
    let questionTagArray:Array<string> = [];
    let replaceTag:string = "";
    let linkTag:string="";
    for (let i = 0; i < this.cont.getQuestions.length; i++) {
      const element = this.cont.getQuestions[i];
      questionTagArray.push("<question id="+element.getQid+"></question>");
      replaceTag = "<question id="+element.getQid+"></question>";
      linkTag = "<a (click)=\"dispOpt\" class=\"options "+element.getQid+"\">_________</a>";
      // linkTag = "<span id=\""+element.getQid+"\">_________</span>";
      let replacedArticle = this.cont.getArticle.replace(replaceTag,linkTag);
      this.cont.setArticle=replacedArticle;
    }      
    return this.cont.getArticle;
  }

  
}
