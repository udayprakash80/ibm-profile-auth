import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import {Udaya_appService} from "../udaya_app.service";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {ReactiveFormsModule} from "@angular/forms";

fdescribe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [Udaya_appService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.registrationForm.valid).toBeFalsy();
  });

  it('Test for number of element', () => {
    const element = fixture.debugElement.nativeElement.querySelector('#registrationForm');
    const inputCount = element.querySelectorAll('input');
    expect(inputCount.length).toEqual(4);
  });

  it('Test for initial value', () => {
    const formGroup = component.registrationForm;
    const values = {
      nameFormControl: '',
      emailFormControl: '',
      passwordFormControl: '',
      bioFormControl: ''
    }
    expect(formGroup.value).toEqual(values);
  })

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('User Registration Form');
  });

  it('email field validity', () => {
    const email = component.registrationForm.controls['emailFormControl'];
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();

    email.setValue('udayprakash80@yahoo.com');
    expect(email.hasError('email')).toBeFalsy();
  });
});
