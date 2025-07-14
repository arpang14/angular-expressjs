import { Component, OnInit } from '@angular/core';
import { Icategory } from '../icategory';
import { IEmscategory } from '../iemscategory';
import { EmployeeDataService } from '../employee-data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [EmployeeDataService]
})

export class CategoryComponent implements OnInit {
  employeeList: Icategory[];
  categoryList;
  constructor(private empDataService: EmployeeDataService) { }

  ngOnInit() {
    this.employeeList = this.empDataService.getEmployeeList();
    this.empDataService.getConfig()
      .subscribe((data) => this.categoryList = data);
  }

}
