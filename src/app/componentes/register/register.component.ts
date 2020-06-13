import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AlertServiceService } from 'src/app/alert-service.service';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private service: RESTservicioService,
      private alertService: AlertServiceService
  ) {
      // redirect to home if already logged in
      if (this.service.currentUser) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          name: ['', Validators.required],
          lastName: ['', Validators.required],
          nick: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          email:['',[Validators.required, Validators.email]],
          estado:['Offline']
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.service.register(this.registerForm.value)
          .subscribe(
              data => {
                  this.alertService.success('Registro exitoso', true);
                  this.router.navigate(['/login']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
