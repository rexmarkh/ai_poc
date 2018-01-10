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
  public urlValue;
  constructor(private fetchdataService: FetchdataService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'url' : [null, Validators.required]
    });
  }

  public ngOnInit() {  
  }
  
  public onSubmit(post) {
    this.fetchdataService.setData(post.url);       
  }
}
