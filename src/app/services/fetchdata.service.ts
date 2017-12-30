import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { DOCUMENT } from '@angular/common';
import "rxjs/add/operator/map";
import { Content } from "../components/questions/content";
import { Question } from "../components/questions/question";

@Injectable()
export class FetchdataService {
  public data: any = [];
  private content = new Content();
  private baseUrl = "./assets/data/ai.json";

  constructor(private http: Http,@Inject(DOCUMENT) private document) {}
  
  ngOnInit() {}

  fetchData() {
    return this.http.get(this.baseUrl).map((res: Response) => {
      return res.json();
    });
  }

  setData() {
    return this.fetchData().subscribe(data => {
      this.data = data;
    });
  }

  public parseJSONData() {
    let question;
    let optionsList: Array<string>;
    let questionsList: Array<Question> = [];
    let data = this.data;
    for (let i = 0; i < data.questions.length; i++) {
      const element = data.questions[i];
      question = new Question();
      question.setQid = element.id;
      question.setAnswer = element.answer;
      optionsList = [];
      for (let j = 0; j < element.options.length; j++) {
        optionsList.push(element.options[j]);
      }
      question.setOptions = optionsList;
      questionsList.push(question);
    }
    this.content.setQuestions = questionsList;
    this.content.setArticle = data.article;
    this.content.setQuestionType = data.questionType;
    this.modifyContent();
    return this.content;
  }

  public modifyContent() {
    let replaceTag: string = "";
    let linkTag: string = "";
    for (let i = 0; i < this.content.getQuestions.length; i++) {
      const element = this.content.getQuestions[i];
      replaceTag = "<question id=" + element.getQid + "></question>";
      linkTag = '<a class="options ' + element.getQid + '">_________</a>';
      this.content.setArticle = this.content.getArticle.replace(replaceTag, linkTag);
    }
  }

  public setUserAnswer(userAnswer, selectedQid) {
    let replaceTag: string = "";
    let linkTag: string = "";
    for (let i = 0; i < this.content.getQuestions.length; i++) {
      const element = this.content.getQuestions[i];
      if(element.getQid == selectedQid){
        replaceTag = '<a class="options ' + selectedQid + '">_________</a>';
        linkTag = '<a class="options ' + selectedQid + '">'+userAnswer+'</a>';
        console.log(replaceTag);
        console.log(linkTag);
        this.content.setArticle = this.content.getArticle.replace(replaceTag, linkTag);
        break;
      }
    }
  }

  public checkAnswer(userAnswer, selectedQid) {
     //To be moved to Service layer
     let questions: Array<Question> = this.content.getQuestions;
     for (let index = 0; index < questions.length; index++) {
      if(questions[index].getQid == selectedQid){
        //questions[index].getOptions indicates OPTIONS
        if(questions[index].getAnswer == userAnswer){
          console.log("Answer is correct.."); 
          
         this.document.querySelector(".options").style.color = 'green';;
          
        }else{
          console.log("Answer is Wrong"); 
          this.document.querySelector(".options").style.color = 'red';;          
        }
        break;
      }
    }
  }

  public getContent() {
    return this.content;
  }
}
