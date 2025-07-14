import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Iexpense } from './expense/iexpense';
import { Observable } from 'rxjs';
import 'rxjs';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};
@Injectable()
export class ExpensedataService {


  constructor(private http: HttpClient) { }



  

registerUser(dataform) {
    return this
      .http
      .post('http://localhost:3000/api/registerUsers', JSON.stringify(dataform), httpOptions)
  }
  getcategory() {
    return this.http.get('http://localhost:3000/api/categories');
  }

  getexpenses(): Observable<Iexpense[]> {
    return this.http.get<Iexpense[]>('http://localhost:3000/api/expenses');
  }
  getExpenseDetail(id): Observable<any> {
    return this.http.get('http://localhost:3000/api/expense/' + id);
  }
  addexpenseData(dataform) {
    return this
      .http
      .post('http://localhost:3000/api/expense', JSON.stringify(dataform), httpOptions)
  }
  updateexpenseData(dataform, expenseid) {
    return this
      .http
      .put('http://localhost:3000/api/expense/' + expenseid, JSON.stringify(dataform), httpOptions)
  }

  deleteexpenses(exid): Observable<any> {
    return this.http.delete('http://localhost:3000/api/expense/' + exid);
  }
}

