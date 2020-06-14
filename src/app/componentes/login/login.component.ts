import { Component, OnInit } from '@angular/core';
import { RESTservicioService } from 'src/app/servicio/restservicio.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertServiceService } from 'src/app/alert-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm: FormGroup;
   loading = false;
   submitted = false;
   returnUrl: string;
   public loginIncorrecto : boolean = false;

   constructor(
       private formBuilder: FormBuilder,
       private route: ActivatedRoute,
       private router: Router,
       public service: RESTservicioService,
       private alertService: AlertServiceService,
       
   ) {
       // redirect to home if already logged in
       if (this.service.currentUser) {
           this.router.navigate(['/home']);
       }
   }

   ngOnInit() {
       this.loginForm = this.formBuilder.group({
           nick: ['', Validators.required],
           password: ['', Validators.required]
       });

       // get return url from route parameters or default to '/'
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
   }

   // convenience getter for easy access to form fields
   get f() { return this.loginForm.controls; }

   onSubmit() {
       this.submitted = true;

       // reset alerts on submit
       this.alertService.
       clear();

       // stop here if form is invalid
       if (this.loginForm.invalid) {
           return;
       }

       this.loading = true;

       this.service.login(this.f.nick.value, this.f.password.value)
           .subscribe(
               (data : Usuario) => {
                   this.router.navigate(['/home']);
                   this.loginIncorrecto = false;
                   this.service.currentUser = data;
               },
               error => {   
                   this.alertService.error(error);
                   this.loading = false;
                   this.loginForm.setErrors({notFound: true}) ;
                   
                   this.loginIncorrecto = true;
               });
   }

  
}
