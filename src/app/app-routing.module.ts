import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchMasterListComponent } from './branch-master-list/branch-master-list.component';
import { CreateMasterDataComponent } from './create-master-data/create-master-data.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TruckDashboardComponent } from './module/truck/truck-dashboard/truck-dashboard.component';
import { TruckMasterComponent } from './module/truck/truck-master/truck-master.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent },

  {path: 'landing-page', component: HomeComponent, children : [
    {path: '', redirectTo: 'master', pathMatch: 'full'},
    {path: 'master', component: BranchMasterListComponent},
    {path: 'add/:type', component: CreateMasterDataComponent}

  ]},
  {path: 'truck', component: TruckDashboardComponent, children : [
    {path: '', redirectTo: 'master', pathMatch: 'full'},
    {path: 'master', component: TruckMasterComponent},
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
