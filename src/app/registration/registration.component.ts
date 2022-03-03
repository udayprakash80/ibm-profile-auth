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
  registrationForm!: FormGroup;

  constructor(private appService: AppService,
              private router: Router,
              private   authService: AuthService,
              private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      nameFormControl: ['', Validators.required],
      emailFormControl: ['', [Validators.required, Validators.email]],
      passwordFormControl: ['', Validators.required],
      bioFormControl: ['', Validators.required]
    });
  }

  get nameFormControl() { return this.registrationForm.get('nameFormControl'); }
  get emailFormControl() { return this.registrationForm.get('emailFormControl'); }
  get passwordFormControl() { return this.registrationForm.get('passwordFormControl'); }
  get bioFormControl() { return this.registrationForm.get('bioFormControl'); }

  onSubmit(){
    if(this.registrationForm?.valid){
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
