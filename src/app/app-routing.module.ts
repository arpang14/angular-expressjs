import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthguardGuard } from './authguard.guard';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoryComponent } from './category/category.component';
import { ExpenseComponent } from './expense/expense.component';
import { ExpenseaddComponent } from './expense/expenseadd/expenseadd.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: 'home', component: HomeComponent ,canActivate:[AuthguardGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'emp', component: CategoryComponent,canActivate:[AuthguardGuard] },
  { path: 'expense', component: ExpenseComponent,canActivate:[AuthguardGuard] },
  { path: 'addexpense', component: ExpenseaddComponent,canActivate:[AuthguardGuard] },
  { path: 'addexpense/:id', component: ExpenseaddComponent,canActivate:[AuthguardGuard] },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
