import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/observable';
import { of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class HttpService{

  constructor(
    private http: HttpClient
  ) { }
  getData(url:string) :Observable<any> {
   return this.http.get(url);
  }
  getDataParams(url:string,options):Observable<any>{
    return this.http.get(url,options);
  }
  postData(url:string,dataes:any):Observable<any>{
    return this.http.post(url,dataes,httpOptions)
  }
}
