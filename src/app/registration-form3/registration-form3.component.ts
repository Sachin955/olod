import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration-form3',
  templateUrl: './registration-form3.component.html',
  styleUrls: ['./registration-form3.component.css'],
})
export class RegistrationForm3Component implements OnInit {
  registrationForm: FormGroup;
  apiData:any

  constructor(private http: HttpClient, private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.http.get("../../assets/db.json").subscribe(data=>{
      this.apiData = data;
      console.log(this.apiData)
    })
    
  }
}
