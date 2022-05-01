import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '';
  wrongPasswordText: string = '';
  wrongPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    readonly authSrv: AuthenticationService,
    readonly toastSrv: ToastrService
  ) {
    // redirect to home if already logged in
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'
          ),
        ],
      ],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.toastSrv.error('Please enter valid input');
      return;
    }

    this.loading = true;
    this.authSrv
      .login(
        this.loginForm.get('email')?.value,
        this.loginForm.get('password')?.value
      )
      .subscribe(
        (res) => {
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.router.navigate(['/home']);
        },
        (error) => {
          this.loading = false;
          this.toastSrv.error('Something went wrong');
        }
      );
  }
}
