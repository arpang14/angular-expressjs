import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExpensedataService } from '../expensedata.service';
import { AuthServiceService } from '../auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from "moment";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ExpensedataService, AuthServiceService]
})
export class LoginComponent implements OnInit {

  constructor(private expService: ExpensedataService, private authService: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  formdata;
  errormessage: string = "";
  displayerrormessage: boolean = false;
  ngOnInit() {
    this.formdata = new FormGroup({
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
    this.authService.loginUser(this.formdata.value)
      .subscribe((data) => {
      this.authService.setSession(data);
      this.router.navigate(['/home']);
    },
      err => {
        this.errormessage = err.error.message;
        this.displayerrormessage = true;

      });


  }

}
