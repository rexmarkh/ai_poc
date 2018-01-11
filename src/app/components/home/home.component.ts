import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FetchdataService } from "../../services/fetchdata.service";
import { Question } from "../questions/question";
import { Content } from "../questions/content";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
  public rForm: FormGroup;
  questypes:Array<string> = ['verb', 'preposition', 'determinant'];
  constructor(private fetchdataService: FetchdataService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'url' : [null, Validators.required],
      'verb' : [false],
      'preposition' : [false],
      'determinant' : [false]
    });
  }

  public ngOnInit() {  
  }
  
  public onSubmit(post) {
    // console.log(post.url, post.verb, post.preposition, post.determinant);
    // this.fetchdataService.setData(post.url);       
    
    this.fetchdataService.setData(post.url, post.verb, post.preposition, post.determinant);       
  }
}
