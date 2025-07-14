import { Component, OnInit,Input,Output } from '@angular/core';
import { ExpensedataService } from '../expensedata.service';
import { Iexpense } from './iexpense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css'],
  providers: [ExpensedataService]
})
export class ExpenseComponent implements OnInit {
  expenselist: Iexpense[]=[];

  constructor(private expService: ExpensedataService) { }

  ngOnInit() {
   // this.expenselist = this.expService.getexpenses();
    this.expService.getexpenses()
      .subscribe((data) =>{
          
          this.expenselist =data;
      });
  }

getTotalExpense(){
return  this.expenselist.length;
}
getTotalExpenseBytravel(){
 return  this.expenselist.filter(e=>e.categoryId.categoryName=='Travel').length;
}
getTotalExpenseBygrocery(){
 return  this.expenselist.filter(e=>e.categoryId.categoryName=='Grocery').length;
}

getTotalExpenseByMovies(){
 return  this.expenselist.filter(e=>e.categoryId.categoryName=='Movies').length;
}

selectedexpenseCountRadioButton:string="All";

onexpenseCountRadioButtonChange(slectedradioButtonval:string):void{
  this.selectedexpenseCountRadioButton=slectedradioButtonval;
}
  onDelete(expense) {
    this.expService.deleteexpenses(expense._id)
      .subscribe((data) => {
     
        this.expService.getexpenses()
          .subscribe((data) => this.expenselist = data);
      });
  }



}
