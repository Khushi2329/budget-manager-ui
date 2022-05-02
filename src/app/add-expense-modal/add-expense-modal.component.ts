import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-expense-modal',
  templateUrl: './add-expense-modal.component.html',
  styleUrls: ['./add-expense-modal.component.scss']
})
export class AddExpenseModalComponent implements OnInit {

  expenseForm: FormGroup;
   monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
date = new Date()

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    readonly fb: FormBuilder,
    readonly dataSrv: DataService,
    public dialogRef: MatDialogRef<AddExpenseModalComponent>
  ) {
    this.expenseForm = this.fb.group({
      whoAdded: [],
      whatAdded: [],
      amount: [],
      date: [],
      month: [this.monthNames[this.date.getMonth()]],
      category: []

    });
  }

  ngOnInit(): void {}

  addExpensesData() {
    this.dataSrv
      .addExpenses(this.expenseForm.value)
      .subscribe((res) => {
        console.log(res);
        this.dialogRef.close(res);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

