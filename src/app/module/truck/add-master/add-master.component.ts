import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-add-master',
  templateUrl: './add-master.component.html',
  styleUrls: ['./add-master.component.scss'],
})
export class AddMasterComponent implements OnInit {
  truckForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    readonly fb: FormBuilder,
    readonly dataSrv: DataService,
    public dialogRef: MatDialogRef<AddMasterComponent>
  ) {
    this.truckForm = this.fb.group({
      code: [],
      make: [],
      remarks: [],
    });
  }

  ngOnInit(): void {}

  createTruckMakeMasterData() {
    this.dataSrv
      .createTruckMakeMaster(this.truckForm.value)
      .subscribe((res) => {
        console.log(res);
        this.dialogRef.close(res);
      });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
