import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  dynamicFormArray: any;
  captchaValueOne: any = Math.floor(Math.random() * 10);
  captchaValueTwo: any = Math.floor(Math.random() * 10);
  registrationForm: any;
  totalValue_captcha: any;
  listItems:Array<string>=[
    'Home','About Us', 'HelpDesk','Suggestions','FAQs','Contact Us','USER MANUAL','Examinations', 'Operator Login',
    'Officer Login'
  ]
  bannerImage:any="../../assets/images/banner-prikshadgca.jpg"
  constructor(private httpClient: HttpClient, private _fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this._fb.group({
      inputCaptcha: [],
    });

    this.httpClient.get('/assets/db.json').subscribe((data) => {
      this.dynamicFormArray = data;
      console.log(this.dynamicFormArray)
      this.formControl();
    });
  }

  captcha_click() {
    this.captchaValueOne = Math.floor(Math.random() * 10);
    this.captchaValueTwo = Math.floor(Math.random() * 10);
  }

  submitHandler(registrationForm: any) {
 
    this.totalValue_captcha = this.captchaValueOne + this.captchaValueTwo;
    
    if (
      this.totalValue_captcha ===
      Number(registrationForm.controls.inputCaptcha.value)
    ) {
      alert('Login Successful');
    } else if (registrationForm.controls.inputCaptcha.value === Number('')) {
      alert('Enter Captcha value');
    } else {
      alert('Wrong Captcha Value');
    }
  }

  formControl() {
    this.dynamicFormArray.forEach((element: any) => {
      if (element.Required === true) {
        this.registrationForm.addControl(
          element.ID,
          new FormControl('', Validators.required)
        );
      } else {
        this.registrationForm.addControl(element.ID, new FormControl(''));
      }
      console.log(this.registrationForm)
    });
  }
}
