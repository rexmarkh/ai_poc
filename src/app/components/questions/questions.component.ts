import { Component, OnInit, Inject} from "@angular/core";
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";
import { FetchdataService } from "../../services/fetchdata.service";
import { Content } from "./content";
import { Question } from "../questions/question";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"]
})

export class QuestionsComponent implements OnInit {
 
  public articleData: any;  
  public optionsList:Array<string> = [];
  public questionId:string = "";
  public showOptions:boolean;
  //public pattern: RegExp = /<question id=(.*?)><\/question>/g;

  constructor(
    private fetchdataService: FetchdataService,
    private router: Router,
    @Inject(DOCUMENT) private document    
  ) {}

  public ngOnInit() {
    this.articleData = this.fetchdataService.getContent().getArticle;
    this.showOptions = false;
  }

  public ngAfterViewInit () {
    // this.document.querySelector(".options").addEventListener('click', ($event)=> this.displayOptions($event));
    for (let index = 0; index < this.document.getElementsByClassName("options").length; index++) {
      this.document.getElementsByClassName("options")[index].addEventListener('click', ($event)=> this.displayOptions($event));
    }
  }

  public displayOptions(event){
    let currentQid = event.target.className.split(" ")[1];
    let questions: Array<Question>  = this.fetchdataService.getContent().getQuestions;
    this.questionId = currentQid;
    for (let index = 0; index < questions.length; index++) {
      if(questions[index].getQid == currentQid){
        //questions[index].getOptions indicates OPTIONS
        this.optionsList = questions[index].getOptions;
        this.showOptions = true;
        break;
      }
    }
  }

  public processAnswer(event){
    let userAnswer = event.target.attributes.value.nodeValue;
    let questions: Array<Question>  = this.fetchdataService.getContent().getQuestions;
    let selectedQid: number = event.target.attributes.id.nodeValue ;
    this.fetchdataService.setUserAnswer(userAnswer, selectedQid);
    this.fetchdataService.checkAnswer(userAnswer, selectedQid);    
    this.articleData = this.fetchdataService.getContent().getArticle;
  }
}
