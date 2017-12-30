import { Component, OnInit, TemplateRef , EventEmitter,Input,Output} from "@angular/core";
import {Router} from '@angular/router';
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Rx";
import { FetchdataService } from "../../services/fetchdata.service";
import { Question } from "../questions/question";
import { Content } from "../questions/content";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {

  
  constructor(private fetchdataService: FetchdataService, private router: Router) {}

  public ngOnInit() {
    this.fetchdataService.setData();   
  }

  public onSubmit() {
    this.router.navigateByUrl('/questions');
    // this.fetchdataService.parseJSONData(); 
  }
}
