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
    private router:Router) {}

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
    console.log(this.registrationForm.value);
      this.http.post<any>('http://localhost:3000/signup',this.registrationForm.value)
      .subscribe(res=>{
        alert('successful register');
        this.registrationForm.reset()
        this.router.navigate(['login'])
      })
  }

  createFormControl(){
    this.dbData.forEach((element:any) => {
      this.registrationForm.addControl(element.Component_Type, new FormControl(''));
      console.log(element.Component_Type)
      
    });
  }


  

  
}
