import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { BranchMasterListComponent } from './branch-master-list/branch-master-list.component';
import { AngularMaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { CreateMasterDataComponent } from './create-master-data/create-master-data.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { SearchPipe } from './shared/search-pipe';

import { ToastrModule } from 'ngx-toastr';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { TruckDashboardComponent } from './module/truck/truck-dashboard/truck-dashboard.component';
import { TruckMasterComponent } from './module/truck/truck-master/truck-master.component';
import { AddMasterComponent } from './module/truck/add-master/add-master.component';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { AddExpenseModalComponent } from './add-expense-modal/add-expense-modal.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidenavComponent,
    HomeComponent,
    BranchMasterListComponent,
    CreateMasterDataComponent,
    SearchPipe,
    TruckDashboardComponent,
    TruckMasterComponent,
    AddMasterComponent,
    AdminComponent,
    AddExpenseModalComponent,
    AddCategoryModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TabViewModule,
    ButtonModule,
    NgxMatSelectSearchModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      autoDismiss: true
    }),
  ],
  entryComponents: [AddMasterComponent, AddCategoryModalComponent],

  

  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },{
    provide: MatDialogRef,
    useValue: {}
  },],
  bootstrap: [AppComponent],
})
export class AppModule {}
