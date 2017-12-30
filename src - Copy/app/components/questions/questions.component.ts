import { Component, OnInit, TemplateRef, Input , Inject , ElementRef, Renderer} from "@angular/core";
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
 
  public singleData: any;
  public result: Array<string> = [];
  public questionsMap: Map<string, string>;
  public sampleChildData : Content;
  public pattern: RegExp = /<question id=(.*?)><\/question>/g;
  public ddd:Array<string> = [];
  public optArray:Array<string> = [];
  public questionId:string = "";
  private cont = new Content();
  constructor(
    private fetchdataService: FetchdataService,
    private router: Router,
    private elRef: ElementRef,
    private renderer: Renderer,
    @Inject(DOCUMENT) private document    
  ) {}

  public ngOnInit() {
    this.fetchdataService.fetchData().subscribe(data => {
      this.singleData = data.article;
      this.questionsMap = new Map<string, string>();
      // this.singleData = this.singleData.article;
      // console.log(this.singleData);      
    });
  }

  public getSingledata() {
    // this.result = this.singleData.article.match("id=(.*?)\\>");
    // this.result = this.singleData.match(/id=(.*?)/g);
    // console.log(this.result);
    // return this.singleData;
    this.document.querySelector(".options").addEventListener('click', ($event)=> this.displayOptions($event));
    // this.document.querySelectorAll('a').addEventListener( 'click', function() {
    //   console.log("getsingledata queryselector");
    // });
  //   this.document.querySelectorAll('a').forEach( function( item, idx ) {
  //     item.addEventListener( 'click', function() {
  //     console.log("getsingledata queryselector");
  //     } );
  // } );

    // for (let index = 0; index < document.querySelectorAll(".options").length; index++) {
    //   const element = document.querySelectorAll(".options")[index];
    //   this.elRef.nativeElement.querySelector(".options").addEventListener('click', (event));
    // }

  }

  public getQuestions() {
    this.result = this.singleData.match(this.pattern);
    this.result.forEach(key => {
      this.questionsMap.set(key, "");
    });
    this.cont = this.fetchdataService.parseJSONData()
    this.singleData= this.fetchdataService.ss();
    console.log("returned from SS..");
  }

  public displayOptions(event){
    let id = event.target.className.split(" ")[1];
    let questions: Array<Question>  = this.cont.getQuestions;
    this.questionId = id;
    // questions.forEach(question => {
    //   if(question.getQid == id){
    //     options = question.getOptions;
    //     console.log(options);
    //     return options;
    //   }
    // });

    for (let index = 0; index < questions.length; index++) {
      if(questions[index].getQid == id){
        console.log(questions[index].getOptions);
        this.optArray = questions[index].getOptions;
        //questions[index].getOptions indicates OPTIONS
        this.optArray = questions[index].getOptions;
        return questions[index].getOptions;
      }
    }
  }

// public showOptions(){
//   console.log("Entered into showOptions..");
//   this.ddd = [];
//   for (let index = 0; index < this.displayOptions.length; index++) {
//     let optArray:Array<String> = [];
//     optArray = this.cont.ge;
//     console.log("Pushing "+optArray);
//     //this.ddd.push(element);
//   }
// }

  public checkAnswer(event){
    console.log(event);
    let userAnswer = event.target.attributes.value.nodeValue;
    let questions: Array<Question>  = this.cont.getQuestions;
    let selectedQid: number = event.target.attributes.id.nodeValue ;
    for (let index = 0; index < questions.length; index++) {
      if(questions[index].getQid == selectedQid){
        console.log(questions[index].getAnswer);
        //questions[index].getOptions indicates OPTIONS
        if(questions[index].getAnswer == userAnswer){
          console.log("Answer is correct..");
         
        }else{
          console.log("Answer is Wrong");          
         
        }
      }
    }
  }
}
