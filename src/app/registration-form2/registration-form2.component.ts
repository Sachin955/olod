import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form2',
  templateUrl: './registration-form2.component.html',
  styleUrls: ['./registration-form2.component.css'],
})
export class RegistrationForm2Component implements OnInit {
  dbData: any;
  registrationForm: FormGroup;
 
  formTitle: any = 'New Candidate Registration Form';

  constructor(private http: HttpClient, private _fb: FormBuilder,
   ) {}

  ngOnInit(): void {
    //creating form group
    this.registrationForm = this._fb.group({
      
      
    });

    //api calling
    this.http.get('../../assets/db.json').subscribe((data) => {
      this.dbData = data;
      this.createFormControl()
    });

   ;
  }

  // create formControl dynamically based on dbData
  onSubmit() {
    console.log(this.registrationForm);
     
  }

  createFormControl(){
    this.dbData.forEach((element:any) => {
      if(element.Component_Required === true){
      this.registrationForm.addControl(element.Component_ID, new FormControl('',Validators.required));
    }else {
      this.registrationForm.addControl(element.ID, new FormControl(''));
    }
    });
  }


  

  
}
