import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-create-master-data',
  templateUrl: './create-master-data.component.html',
  styleUrls: ['./create-master-data.component.scss'],
})
export class CreateMasterDataComponent implements OnInit {
  heading: string = '';
  vendorForm: FormGroup;
  gstForm: FormGroup;
  branchForm: FormGroup;
  stationForm: FormGroup;
  userForm: FormGroup;

  gstMasterData: any[] = [];
  branchMasterData: any[] = [];

  searchText = '';

  constructor(
    readonly router: Router,
    readonly activatedRoute: ActivatedRoute,
    readonly dataSrv: DataService,
    readonly fb: FormBuilder,
    readonly toastSrv: ToastrService,
    readonly location: Location
  ) {
    this.activatedRoute.params.subscribe((res) => {
      console.log(res);
      this.heading = res['type'];
    });

    this.vendorForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: [''],
      phone: [''],
      address: [''],
      gstNo: [''],
    });

    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: [''],
      lastName: [''],
      age: [''],
      password: [''],
      branch: [''],
    });

    this.gstForm = this.fb.group({
      address: [''],
      gstNo: [''],
    });

    this.branchForm = this.fb.group({
      code: [''],
      name: [''],
      zone: [''],
      managerName: [''],
      address: [''],
      phoneOffice: [''],
      mobile: [''],
      emailBranch: [''],
      emailAccount: [''],
      emailFreight: [''],
      cashLimit: [''],
      bankLimit: [''],
      bankIfsc: [''],
      bankAccountNo: [''],
      bankName: [''],
      gstNo: [''],
    });

    this.stationForm = this.fb.group({
      state: [''],
      gstNo: [''],
      postalCode: [''],
      branch: [''],
    });
  }

  ngOnInit(): void {
    this.getGSTMasterData();
    this.getBranchMasterData();
  }

  createGstMasterData() {
    this.dataSrv.createGstMaster(this.gstForm.value).subscribe((res) => {
      console.log(res, ' udapte');
      this.toastSrv.success('GST master created');
      this.gstForm.reset();
    });
  }

  getGSTMasterData() {
    this.dataSrv.getGSTMasterData().subscribe((res: any) => {
      this.gstMasterData = res.data;
    });
  }

  getBranchMasterData() {
    this.dataSrv.getBranchMasterData().subscribe((res: any) => {
      this.branchMasterData = res.data;
    });
  }

  createVendorMasterData() {
    this.dataSrv.createPartyMaster(this.vendorForm.value).subscribe((res) => {
      console.log(res, ' udapte');
      this.toastSrv.success('Vendor master created');
      this.vendorForm.reset();
    });
  }

  createBranchMasterData() {
    this.dataSrv.createBranchMaster(this.branchForm.value).subscribe((res) => {
      console.log(res, ' udapte');
      this.toastSrv.success('Branch master created');
      this.branchForm.reset();
    });
  }

  createStationMasterData() {
    console.log(this.stationForm.value);

    let payload = {
      state: this.stationForm.get('state')?.value,
      gstNo: this.stationForm.get('gstNo')?.value,
      postalCode: this.stationForm.get('postalCode')?.value,
      branch: {
        code: this.stationForm.get('branch')?.value.code,
        name: this.stationForm.get('branch')?.value.name,
      },
    };
    console.log(payload);

    this.dataSrv.createStationMaster(payload).subscribe((res) => {
      console.log(res, ' udapte');
      this.toastSrv.success('Station master created');
      this.stationForm.reset();
    });
  }

  createNewUser() {
    let payload = {
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      firstName: this.userForm.get('firstName')?.value,
      lastName: this.userForm.get('lastName')?.value,
      age: this.userForm.get('age')?.value,
      branch: {
        code: this.userForm.get('branch')?.value.code,
        name: this.userForm.get('branch')?.value.name,
      },
    };

    this.dataSrv.createUser(payload).subscribe((res) => {
      console.log(res);

      this.toastSrv.success('Success');
    });
  }

  goBack() {
    this.location.back();
  }
}
