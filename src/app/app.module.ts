import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryComponent } from './category/category.component';
import { EmployeeTitlePipe } from './employeeTitle.pipe';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseaddComponent } from './expense/expenseadd/expenseadd.component';
import { AuthguardGuard } from './authguard.guard';
import { RegistrationComponent } from './registration/registration.component';
import { ChoosecategoryComponent } from './expense/choosecategory/choosecategory.component';
import { FormsModule } from '@angular/forms';
import { CustomInterceptor } from './custom.interceptor';
import { TestcomComponent } from './testcom/testcom.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoryComponent,
    EmployeeTitlePipe,
    ExpenseComponent,
    ExpenseaddComponent,
    RegistrationComponent,
    ChoosecategoryComponent,
    TestcomComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [ AuthguardGuard,{ provide: HTTP_INTERCEPTORS, useClass: CustomInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
