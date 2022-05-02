import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddMasterComponent } from '../module/truck/add-master/add-master.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.scss']
})
export class AddCategoryModalComponent implements OnInit {

  categoryForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    readonly fb: FormBuilder,
    readonly dataSrv: DataService,
    public dialogRef: MatDialogRef<AddCategoryModalComponent>
  ) {
    this.categoryForm = this.fb.group({
      name: [],
    });
  }

  ngOnInit(): void {}

  addCategoryMasterData() {
    this.dataSrv
      .createCategoryMaster(this.categoryForm.value)
      .subscribe((res) => {
        console.log(res);
        this.dialogRef.close(res);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
