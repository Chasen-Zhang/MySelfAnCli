import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../http.service";
import {HttpParams} from "@angular/common/http"
@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  private httpParams: HttpParams = new HttpParams();
  constructor(
    private http:HttpService
  ) { }

  ngOnInit() {
   /* this.http.getData('https://easy-mock.com/mock/5b02866bfd32380d69486d86/test/get').subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err);
    })*/

  /*  this.http.getDataParams('https://easy-mock.com/mock/5b02866bfd32380d69486d86/test/get',{
      params: this.httpParams
                .set('name', 'micale')
                .set('limitToFirst', "1")
    }).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err);
    })*/

    this.http.postData('https://easy-mock.com/mock/5b02866bfd32380d69486d86/test/test',{a:3,b:90}).subscribe(data=>{
      console.log(data)
    },err=>{
      console.log(err);
    })

  }

}
