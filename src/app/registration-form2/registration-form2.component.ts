import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

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
  constructor(private http: HttpClient, private _fb: FormBuilder) {}

  ngOnInit(): void {
    //creating form group
    this.registrationForm = this._fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
     password: ['',[Validators.required, Validators.minLength(6)]],
     contact: ['',[Validators.required, Validators.pattern("[0-9]{3}-[0-9]{2}-[0-9]{3}")]],
     email: ['',[Validators.required, Validators.email]],
     date: ['', Validators.required],
     gender: [''],
     city: ['',[Validators.required]],
     state: ['',[Validators.required]],
     checkbox:[''],
     
     

    });

  
    //api calling
    this.http.get('../../assets/db.json').subscribe((data) => {
      this.dbData = data;
      
    });
  }
  // create formControl dynamically based on dbData
 

 
  onSubmit(){
    console.log("kjg")
    
    
  }

  
} // class end
