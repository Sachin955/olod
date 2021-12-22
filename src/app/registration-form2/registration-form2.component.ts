import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
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

  formTitle: any = 'New Candidate Registration Form';
  constructor(private http: HttpClient, private _fb: FormBuilder) {}

  ngOnInit(): void {
    //creating form group
    this.registrationForm = this._fb.group({});
    //api calling
    this.http.get('../../assets/db.json').subscribe((data) => {
      this.dbData = data;
      this.createFormControl();
    });
  }
  // create formControl dynamically based on dbData
  createFormControl() {
    this.dbData.forEach((element: any) => {
      if (element.Required === true) {
        this.registrationForm.addControl(
          element.ID,
          new FormControl('', Validators.required)
        );
      } else {
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
    });
    console.log(this.registrationForm.value);
  }

  registrationSubmit() {
    
    alert('Registration successful');
  }
} // class end
