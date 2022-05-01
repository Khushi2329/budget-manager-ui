import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PeriodicElement } from 'src/app/branch-master-list/branch-master-list.component';
import { DataService } from 'src/app/services/data.service';
import { AddMasterComponent } from '../add-master/add-master.component';

@Component({
  selector: 'app-truck-master',
  templateUrl: './truck-master.component.html',
  styleUrls: ['./truck-master.component.scss'],
})
export class TruckMasterComponent implements OnInit {
  displayedColumnsTruckMakeMaster: string[] = ['code', 'make'];
  displayedColumnsGstMaster: string[] = ['gstNo', 'address'];
  displayedColumnsStationMaster: string[] = [
    'gstNo',
    'state',
    'postalCode',
    'branch',
  ];
  displayedColumnsBranchMaster: string[] = [
    'code',
    'address',
    'name',
    'managerName',
    'mobile',
  ];
  displayedColumnsUserMaster: string[] = ['email', 'firstName'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  dataSourceTruckMakeMaster = new MatTableDataSource<any>([]);
  dataSourceBranchMaster = new MatTableDataSource<any>([]);
  dataSourceStationMaster = new MatTableDataSource<any>([]);
  dataSourceUserMaster = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    readonly router: Router,
    readonly dataSrv: DataService,
    public dialog: MatDialog

  ) {}

  ngOnInit() {
    this.getTruckMakeMasterData();
  }

  getTruckMakeMasterData() {
    this.dataSrv.getTruckMakeMasterData().subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSourceTruckMakeMaster = new MatTableDataSource(data);
      setTimeout(() => {
        this.dataSourceTruckMakeMaster.paginator = this.paginator;
      }, 10);
    });
  }

  applyFilter(event: Event, type: string) {
    console.log(event, ' filter wala case');

    const filterValue = (event.target as HTMLInputElement).value;
    if (type === 'vendor') {
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    
  }

  openDialog(data: string) {
   let dialogRef =  this.dialog.open(AddMasterComponent, {
      data: {
        type: data
      },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if(result){
        this.getTruckMakeMasterData();

      }
    });
  }
}
