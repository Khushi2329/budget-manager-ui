import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddExpenseModalComponent } from '../add-expense-modal/add-expense-modal.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'whoAdded',
    'amount',
    'date',
    'category',
    'whatAdded',
    'month',
  ];
  categoryData: any[] = [];
  selectedMember: string = '';

  dataSourceExpenses = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  userData = JSON.parse(localStorage.getItem('currentUser') || '{}');

  constructor(
    readonly router: Router,
    readonly dataSrv: DataService,
    public dialog: MatDialog
  ) {
    this.userData = this.userData.user.familyMembers;
    this.selectedMember = this.userData[0];
  }

  ngOnInit() {
    console.log(this.userData);

    this.getCategories();
    this.getExpensesData();
  }

  getExpensesData() {
    this.dataSrv.getExpensesData(this.selectedMember).subscribe((res: any) => {
      console.log(res);
      let data = [...res['data']];
      this.dataSourceExpenses = new MatTableDataSource(data);
      setTimeout(() => {
        this.dataSourceExpenses.paginator = this.paginator;
      }, 10);
    });
  }

  getCategories() {
    this.dataSrv.getCategoryMasterData().subscribe((res: any) => {
      console.log(res);
      this.categoryData = [...res['data']];
    });
  }

  openDialog(data: string) {
    let dialogRef = this.dialog.open(AddExpenseModalComponent, {
      data: {
        type: data,
        categoryData: this.categoryData,
        member: this.selectedMember
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      if (result) {
        this.getExpensesData();
      }
    });
  }
  changeMember(data: any) {
    console.log(data);
    this.getExpensesData();
  }
}
