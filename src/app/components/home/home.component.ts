import { Component, OnInit, TemplateRef } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import { FetchdataService } from '../../services/fetchdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public singleData: any;  
  
  constructor(private fetchdataService: FetchdataService) {
  }

  public ngOnInit(): void  {
    // this.fetchdataService.fetchData()
    //   .subscribe(
    //     data => {this.data = data;
    //     console.log(this.data);      
    //   });
    //   console.log(this.data); 
    this.fetchdataService.fetchData().subscribe(data => {
      this.singleData = data;
      console.log(data);       
    });     
      console.log(this.singleData); 
      
  }



}
