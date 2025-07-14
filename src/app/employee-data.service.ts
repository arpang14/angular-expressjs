import { Injectable } from '@angular/core';
import { Icategory } from './icategory';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class EmployeeDataService {

  constructor(private http: HttpClient) { }

  getEmployeeList(): Icategory[] {
    return this.employeeList;

  }

  getConfig() {
    return this.http.get('http://localhost:3000/api/categories');
  }

  employeeList: Icategory[] = [{
    code: "emp1", name: "JOHN", gender: "Male",
    salary: 89,
    dateOfbirth: "2/26/1983"
  }, {
    code: "emp11", name: "mIC", gender: "Female",
    salary: 89,
    dateOfbirth: "7/6/1977"
  }, {
    code: "emp13", name: "Dann", gender: "Female",
    salary: 89,
    dateOfbirth: "9/26/1987"
  }, {
    code: "emp1", name: "Raaj", gender: "Male",
    salary: 89,
    dateOfbirth: "6/6/1987"
  }];
}
