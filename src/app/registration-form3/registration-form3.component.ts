import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form3',
  templateUrl: './registration-form3.component.html',
  styleUrls: ['./registration-form3.component.css'],
})
export class RegistrationForm3Component implements OnInit {
  registrationForm: FormGroup;
  apiData: any;

  constructor(
    private http: HttpClient,
    private _fb: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],

      email: ['', [Validators.required, Validators.email]],

      password: ['', [Validators.required, Validators.minLength(6)]],

      userAddress: this._fb.group({
        city: ['', Validators.required],
        state: [''],
      }),
      addEmail: new FormArray([]),
    });
    this.http.get('../../assets/db.json').subscribe((data) => {
      this.apiData = data;
      console.log(this.apiData);
    });
  }

  onAddEmail() {
    const newControl = new FormControl(null, [Validators.required]);

    (<FormArray>this.registrationForm.get('addEmail')).push(newControl);
  }

  onSubmit() {
    const userData = this.registrationForm.value;

    this.http
      .post<any>('http://localhost:3000/signUp', userData)
      .subscribe((data) => {
        alert('Registraion success');
      });
    setTimeout(() => {
      this.route.navigate(['']);
    }, 1000);
  }
}
