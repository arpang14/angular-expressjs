import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-choosecategory',
  templateUrl: './choosecategory.component.html',
  styleUrls: ['./choosecategory.component.css']
})
export class ChoosecategoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  all: number = 0;

  @Input()
  grocery: number = 0;

  @Input()
  travel: number = 0;
  
   @Input()
  movies: number = 0;

  seletedradiobuttonvalue:string="all";



  @Output()
  countradionbittonselectedChanged:EventEmitter<string>=new EventEmitter<string>();

  onradiobuttonselectionchange(){

    this.countradionbittonselectedChanged.emit(this.seletedradiobuttonvalue);
  }
}
