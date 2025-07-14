import { Component, OnInit } from '@angular/core';
import { ExpensedataService } from '../../expensedata.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-expenseadd',
  templateUrl: './expenseadd.component.html',
  styleUrls: ['./expenseadd.component.css'],
  providers: [ExpensedataService]
})
export class ExpenseaddComponent implements OnInit {
  expenselist: any;
  categorylist: any=[]
  actionmode: string
  formdataexpense;
  expenseDetail;
  expenseDetailcategoryId='';
  constructor(private expService: ExpensedataService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.expService.getcategory().subscribe((data) => {
      this.categorylist = data;
    });

    if (this.route.snapshot.params['id'] != undefined)
    { this.actionmode = "Edit"; }
    else
    { this.actionmode = "Add"; }

    this.formdataexpense = new FormGroup({
      expenseName: new FormControl("", Validators.compose([Validators.required])),
      amount: new FormControl("", Validators.compose([Validators.required])),
      expenseId: new FormControl("", Validators.compose([Validators.required])),
      categoryId: new FormControl("", Validators.compose([Validators.required])),
      created_At: new FormControl("", Validators.compose([Validators.required]))

    });


    if (this.route.snapshot.params['id'] != undefined) {
      this.expService.getExpenseDetail(this.route.snapshot.params['id']).subscribe((data) => {
        this.expenseDetail = data;
        this.expenseDetailcategoryId=this.expenseDetail.categoryId;
        this.formdataexpense.setValue({
          expenseName: data.expenseName,
          amount: data.amount,
          expenseId: data.expenseId,
          categoryId: data.categoryId,
          created_At: data.created_At
        });

      });
    }
  }

  onclicksubmit(formdataexpense) {

    if (this.route.snapshot.params['id'] != undefined) {

      this.expService.updateexpenseData(this.formdataexpense.value, this.formdataexpense.value.expenseId)
        .subscribe((data) => {
          this.router.navigate(['/expense']);
        });

    }
    else {

      this.expService.addexpenseData(this.formdataexpense.value)
        .subscribe((data) => {
          this.router.navigate(['/expense']);
        });
    }
  }


}
