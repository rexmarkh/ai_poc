import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FetchdataService {
  public data: any = [];
  private baseUrl = "./assets/data/ai.json";

  constructor(private http: Http) {

  }
  ngOnInit() { }
  
  fetchData(){
    return this.http.get(this.baseUrl).map((res: Response) => {
      return res.json();
    });
  }

}
