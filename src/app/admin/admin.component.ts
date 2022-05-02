import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  displayedColumnsCategories: string[] = ['position','name'];

  dataSourceAdmin = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(readonly router: Router, readonly dataSrv: DataService,
    public dialog: MatDialog
    ) {}

  ngOnInit() {
    this.getCategoryMasterData();
  }

  getCategoryMasterData() {
    this.dataSrv.getCategoryMasterData().subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSourceAdmin = new MatTableDataSource(data);
      setTimeout(() => {
        this.dataSourceAdmin.paginator = this.paginator;
      }, 10);
    });
  }

  

  openDialog(data: string) {
    let dialogRef =  this.dialog.open(AddCategoryModalComponent, {
       data: {
         type: data
       },
     });
     dialogRef.afterClosed().subscribe(result => {
       console.log('The dialog was closed', result);
       if(result){
         this.getCategoryMasterData();
 
       }
     });
   }
}
