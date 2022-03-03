import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AppService} from "../app.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  bioFormControl = new FormControl('', [Validators.required]);

  constructor(private appService: AppService,
              private router: Router,
              private   authService: AuthService,
              fb: FormBuilder,) {
    this.registrationForm = fb.group({
      nameFormControl: ['', Validators.required],
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', Validators.required],
      bioFormControl: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.registrationForm.valid){
      this.appService.registerUser().subscribe( (data: any) => {
        if(data?.success){
          sessionStorage.setItem('loginToken', String(true));
          this.router.navigateByUrl('profile').then(r => {});
        } else {
          sessionStorage.setItem('loginToken', String(false));
        }
      });
    }

  }
}
