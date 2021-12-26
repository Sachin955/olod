import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  responseData: any;
  captchaValueOne: any = Math.floor(Math.random() * 10);
  captchaValueTwo: any = Math.floor(Math.random() * 10);
  allInputControls: any;
  totalValue_captcha: any;
  listItems: Array<string> = [
    'Home',
    'About Us',
    'HelpDesk',
    'Suggestions',
    'FAQs',
    'Contact Us',
    'USER MANUAL',
    'Examinations',
    'Operator Login',
    'Officer Login',
  ];
  bannerImage: any = '../../assets/images/banner-prikshadgca.jpg';
  constructor(private httpClient: HttpClient, private _fb: FormBuilder) {}

  ngOnInit() {
    this.allInputControls = this._fb.group({
      inputCaptcha: [],
    });

    this.httpClient.get('/assets/db.json').subscribe((data) => {
      this.responseData = data;
      // console.log(this.responseData);
      this.registrationFormControl();
    });
  }

  captcha_click() {
    this.captchaValueOne = Math.floor(Math.random() * 10);
    this.captchaValueTwo = Math.floor(Math.random() * 10);
  }

  submitHandler(allInputControls: any) {
    this.totalValue_captcha = this.captchaValueOne + this.captchaValueTwo;

    if (
      this.totalValue_captcha ===
      Number(allInputControls.controls.inputCaptcha.value)
    ) {
      alert('Login Successful');
    } else if (allInputControls.controls.inputCaptcha.value === null) {
      alert('Enter Captcha value');
      allInputControls.preventDefault()
    } else {
      alert('Wrong Captcha Value');
    }
  }

  registrationFormControl() {
    this.responseData.forEach((element: any) => {
      if (element.Required === true) {
        this.allInputControls.addControl(
          element.Component_ID,
          new FormControl('')
        );
      } else {
        this.allInputControls.addControl(element.Component_ID, new FormControl(''));
      }
      
    });
    console.log(this.allInputControls);
  }
}
