import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { DOCUMENT } from '@angular/common';
import "rxjs/add/operator/map";
import {Router} from '@angular/router';
import { Content } from "../components/questions/content";
import { Question } from "../components/questions/question";

@Injectable()
export class FetchdataService {
  public data: any = [];
  private content = new Content();
  private baseUrl = "http://localhost/api/?url=";
  public quesType:Array<string> =[];
  private apiUrl:string = "";

  constructor(private http: Http,@Inject(DOCUMENT) private document, private router: Router) {
  }
  
  ngOnInit() {}

  fetchData() {
    return this.http.get(this.apiUrl).map((res: Response) => {
      return res.json();
    });
  }

  setData(contentUrl){
    this.apiUrl = this.baseUrl + contentUrl+"&type=";
    return this.fetchData().subscribe(data => {
      this.data = data;
      this.parseJSONData();
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
    this.router.navigateByUrl('/questions');
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
        document.getElementsByClassName("options")[i].innerHTML = userAnswer;
        // this.content.setArticle = this.content.getArticle.replace(replaceTag, linkTag);
        break;
      }
    }
  }

  public checkAnswer(userAnswer, selectedQid) { 
     let questions: Array<Question> = this.content.getQuestions;
     for (let index = 0; index < questions.length; index++) {
      if(questions[index].getQid == selectedQid){
        //questions[index].getOptions indicates OPTIONS
        if(questions[index].getAnswer == userAnswer){
          document.getElementsByClassName("options")[index].classList.remove("failure", "success");
          document.getElementsByClassName("options")[index].classList.add("success");
        }else{
          document.getElementsByClassName("options")[index].classList.remove("failure", "success");
          document.getElementsByClassName("options")[index].classList.add("failure");
        }
        break;
      }
    }
  }

  public getContent() {
    return this.content;
  }
}
