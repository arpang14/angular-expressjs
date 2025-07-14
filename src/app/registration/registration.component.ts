import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpensedataService } from '../expensedata.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [ExpensedataService]
})
export class RegistrationComponent implements OnInit {

  constructor(private expService: ExpensedataService,
    private router: Router,
    private route: ActivatedRoute) { }

  formdata;
  errormessage: string = "";
  displayerrormessage: boolean = false;
  ngOnInit() {

    this.formdata = new FormGroup({
      name: new FormControl("", Validators.compose([Validators.required])),
      id: new FormControl("", Validators.compose([Validators.required])),
      email: new FormControl("", Validators.compose([Validators.required])),
      phone: new FormControl("", Validators.compose([Validators.required])),
      status: new FormControl("", Validators.compose([Validators.required])),
      role: new FormControl("", Validators.compose([Validators.required])),
      loginname: new FormControl("", Validators.compose([Validators.required, Validators.minLength(6)])),
      password: new FormControl("", this.custompwdcheck)

    })
  }

  custompwdcheck(formControl) {

    if (formControl.value.length < 5) {
      return { "password": true };
    }
  }

  onclicksubmit(data) {

    this.expService.registerUser(this.formdata.value)
      .subscribe((data) => {
      

      },
      err => {
        this.errormessage = err.error.message;
        this.displayerrormessage = true;

      });


  }

}
