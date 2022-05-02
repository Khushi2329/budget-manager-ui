import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

export interface PeriodicElement {
  name: string;
  address: string;
  phone: string;
  email: string;
  gstNo: string;
}

@Component({
  selector: 'app-branch-master-list',
  templateUrl: './branch-master-list.component.html',
  styleUrls: ['./branch-master-list.component.scss'],
})
export class BranchMasterListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address', 'email', 'phone', 'gstNo'];
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
  dataSourceGstMaster = new MatTableDataSource<any>([]);
  dataSourceBranchMaster = new MatTableDataSource<any>([]);
  dataSourceStationMaster = new MatTableDataSource<any>([]);
  dataSourceUserMaster = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(readonly router: Router, readonly dataSrv: DataService) {}

  ngOnInit() {
    this.getVendorMasterData();
    this.getGSTMasterData();
    this.getStationMasterData();
    this.getBranchMasterData();
    this.getUserMasterData();
  }

  getVendorMasterData() {
    this.dataSrv.getCategoryMasterData().subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSource = new MatTableDataSource(data);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 10);
    });
  }

  getUserMasterData() {
    this.dataSrv.getUserMasterData().subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSourceUserMaster = new MatTableDataSource(data);
    });
  }

  getGSTMasterData() {
    this.dataSrv.getGSTMasterData().subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSourceGstMaster = new MatTableDataSource(data);
    });
  }

  getBranchMasterData() {
    this.dataSrv.getBranchMasterData().subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSourceBranchMaster = new MatTableDataSource(data);
    });
  }

  getStationMasterData() {
    this.dataSrv.getStationMasterData().subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSourceStationMaster = new MatTableDataSource(data);
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

    if (type === 'user') {
      this.dataSourceUserMaster.filter = filterValue.trim().toLowerCase();

      if (this.dataSourceUserMaster.paginator) {
        this.dataSourceUserMaster.paginator.firstPage();
      }
    }

    if (type === 'gst') {
      this.dataSourceGstMaster.filter = filterValue.trim().toLowerCase();

      if (this.dataSourceGstMaster.paginator) {
        this.dataSourceGstMaster.paginator.firstPage();
      }
    }

    if (type === 'station') {
      this.dataSourceStationMaster.filter = filterValue.trim().toLowerCase();

      if (this.dataSourceStationMaster.paginator) {
        this.dataSourceStationMaster.paginator.firstPage();
      }
    }

    if (type === 'branch') {
      this.dataSourceBranchMaster.filter = filterValue.trim().toLowerCase();

      if (this.dataSourceBranchMaster.paginator) {
        this.dataSourceBranchMaster.paginator.firstPage();
      }
    }
  }

  goToAddMasterData(type: string) {
    this.router.navigate([`master/add/${type}`]);
  }
}
