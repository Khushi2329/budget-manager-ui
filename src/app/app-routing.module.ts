import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  
  {path: '', component: HomeComponent, children : [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: DashboardComponent},
    {path: 'admin', component: AdminComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
