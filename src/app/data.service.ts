import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Response} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()

export class DataService {
  handleError: any;
   configUrl = '../assets/api/template.json';
  constructor(private http: HttpClient) { }
  getConfig() {
    return this.http.get(this.configUrl)
    .pipe(map( (response: any) => response ));
  }
   addData (): Observable<any> {
    return this.http.post<any>(this.configUrl, httpOptions)
      .pipe(
        catchError(this.handleError('please add data'))
      );
  }
}
