import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form2',
  templateUrl: './registration-form2.component.html',
  styleUrls: ['./registration-form2.component.css'],
})
export class RegistrationForm2Component implements OnInit {
  dbData: any;
  registrationForm: FormGroup;
  nameValidation: any;
  formTitle: any = 'New Candidate Registration Form';

 
get name(){
  return this.registrationForm.get('name');
}
 
  constructor(private http: HttpClient, private _fb: FormBuilder,
    private router:Router) {}

  ngOnInit(): void {
    //creating form group
    this.registrationForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(3),Validators.pattern("[A-Za-z{8}] ")]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      contact: [
        '',
        [Validators.required],
      ],
      email: ['', [Validators.required, Validators.email]],
      subscribe: [false],
      date: ['', Validators.required],
      gender: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      checkbox: [''],
      
    });

    //api calling
    this.http.get('../../assets/db.json').subscribe((data) => {
      this.dbData = data;
    });

    this.registrationForm
      .get('subscribe')
      ?.valueChanges.subscribe((checkedValue) => {
        const email = this.registrationForm.get('email');
        if (checkedValue) {
          email?.setValidators(Validators.required);
        } else {
          email?.clearValidators();
        }
        email?.updateValueAndValidity();
      });
  }

  // create formControl dynamically based on dbData
  onSubmit() {
    console.log(this.registrationForm.value);
      this.http.post<any>('http://localhost:3000/signup',this.registrationForm.value)
      .subscribe(res=>{
        alert('successful register');
        this.registrationForm.reset()
        this.router.navigate(['login'])
      })
  }
}
